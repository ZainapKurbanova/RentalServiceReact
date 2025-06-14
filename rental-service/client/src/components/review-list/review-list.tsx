import React from 'react';
import { Review as ReviewType } from '../../types/review';
import { Review } from '../review/review';

type ReviewListProps = {
  reviews: ReviewType[];
};

export const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <ul className="reviews__list">
      {reviews.map((item) => (
        <Review review={item} key={item.id} />
      ))}
    </ul>
  );
};