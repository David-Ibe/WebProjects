import { Request, Response } from 'express';

export const getExample = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({ message: 'Example endpoint working' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
