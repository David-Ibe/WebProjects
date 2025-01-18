import { Router } from 'express';
import { getExample } from '../controllers/exampleController';
import { authMiddleware } from '../middlewares/exampleMiddleware';

const router = Router();

router.get('/example', authMiddleware, getExample);

export default router;
