import express from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Registration endpoint
router.post(
  '/register',
  [
    body('firstName').trim().notEmpty().withMessage('First name is required'),
    body('lastName').trim().notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('phone').notEmpty().withMessage('Phone number is required'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  ],
  async (req, res) => {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { firstName, lastName, email, phone, password } = req.body;

      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ message: 'User already exists with this email' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          phone,
          password: hashedPassword,
        },
      });

      // Send welcome email
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: email,
        subject: 'Welcome to HomeBaseNG!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2563eb;">Welcome to HomeBaseNG!</h1>
            <p>Dear ${firstName},</p>
            <p>Thank you for registering with HomeBaseNG - Nigeria's premier real estate platform!</p>
            <p>Your account has been successfully created. You can now:</p>
            <ul>
              <li>Browse exclusive property listings</li>
              <li>Save your favorite properties</li>
              <li>Connect with top real estate agents</li>
              <li>Receive personalized property recommendations</li>
            </ul>
            <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
            <p>Best regards,<br>The HomeBaseNG Team</p>
          </div>
        `,
      });

      res.status(201).json({
        message: 'Registration successful! Please check your email for confirmation.',
        userId: user.id,
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Failed to register user' });
    }
  }
);

export default router;
