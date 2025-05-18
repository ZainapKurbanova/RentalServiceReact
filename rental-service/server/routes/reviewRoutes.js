import Router from 'express';
import { addReview, getReviewsByOfferId } from '../controllers/reviewController.js';

const router = new Router();

router.get('/:offerId', getReviewsByOfferId);
router.post('/:offerId',  addReview);

export default router;
