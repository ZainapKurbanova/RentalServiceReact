import { Router } from 'express';
import offerRoutes from './offerRoutes.js'; 
import userRoutes from './userRoutes.js';
const router = Router();

router.use('/', offerRoutes);
router.use('/', userRoutes);

export default router;
