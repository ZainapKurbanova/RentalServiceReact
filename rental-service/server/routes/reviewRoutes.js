import Router from 'express';
import { addReview } from '../controllers/reviewController.js';

const router = new Router();

router.post('/:offerId',  addReview);

export default router;
