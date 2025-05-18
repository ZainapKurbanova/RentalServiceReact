import { Router } from 'express';
import offerRoutes from './offerRoutes.js'; 
import userRoutes from './userRoutes.js';
import reviewRouter from './reviewRoutes.js';

const router = Router();

router.use('/', offerRoutes);
router.use('/', userRoutes);
router.use('/comments', reviewRouter);

export {router};
