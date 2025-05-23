import { Router } from 'express';
import {createOffer, getAllOffers, getFullOffer, getFavoriteOffers, toggleFavorite}  from '../controllers/offerController.js';
import upload from '../middleware/upload.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/offers', getAllOffers);
router.get('/offers/:id', getFullOffer);
router.get('/favorite', getFavoriteOffers);
router.post('/favorite/:offerId/:status', authenticateToken, toggleFavorite);
router.post('/offers', upload.fields([
    { name: 'previewImage', maxCount: 1},
    { name: 'photos', maxCount: 6 }
]), createOffer);

export default router;
