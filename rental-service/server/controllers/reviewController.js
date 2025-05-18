import {Review} from '../models/review.js';
import ApiError from '../error/ApiError.js';
import { User } from '../models/user.js';
const addReview = async (req, res, next) => {
    try {
        const {comment, rating} = req.body;
        const offerId = req.params.offerId;
        const userId = req.user.id;

        if (!comment || !rating || !offerId) {
            return next(ApiError.badRequest('Не хватает данных для комментария'));
        }
        const review = await Review.create({
            text: comment,
            rating,
            authorId: userId,
            OfferId: offerId
        });
        res.status(201).json(review);
    } catch (error) {
        console.error(error);
        next(ApiError.badRequest('Ошибка при добавлении комментария'));
    }
};
export {addReview};
