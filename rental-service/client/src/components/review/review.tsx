// src/components/reviews/Review.tsx
import React from 'react';
import { Review as ReviewType } from '../../types/review';

type ReviewProps = {
  review: ReviewType;
};

export const Review: React.FC<ReviewProps> = ({ review }) => {
  // Превращаем дату ISO в формат «Month Year», например '2021-08-10' → 'August 2021'
  const dateObj = new Date(review.date);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const formattedDate = `${monthNames[dateObj.getUTCMonth()]} ${dateObj.getUTCFullYear()}`;

  // Ширина для «звёзд»: rating от 0 до 5 → проценты (каждая звезда = 20%)
  const ratingWidth = `${(review.rating / 5) * 100}%`;

  return (
    <li className="reviews__item" key={review.id}>
      <div className="reviews__user user">
        <div className={`reviews__avatar-wrapper user__avatar-wrapper${review.user.isPro ? ' reviews__avatar-wrapper--pro' : ''}`}>
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt={`${review.user.name} avatar`}
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
};