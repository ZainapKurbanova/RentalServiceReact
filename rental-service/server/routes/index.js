import { Router } from 'express';
import offerRoutes from './offerRoutes.js'; 

const router = Router();

router.use('/', offerRoutes);

export default router;
