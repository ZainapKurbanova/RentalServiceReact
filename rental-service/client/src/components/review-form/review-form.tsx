import React, { useState, ChangeEvent, FormEvent } from "react";

function ReviewForm() {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<{ rating: number; review: string } | null>(null);

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleReviewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData({ rating, review });
    setRating(0);
    setReview("");
  };

  const isSubmitDisabled = !rating || review.length < 50;

  return (
    <>
      <form className="reviews__form form" onSubmit={handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>

        <div className="reviews__rating-form form__rating">
          {[5, 4, 3, 2, 1].map((num) => (
            <React.Fragment key={num}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={num}
                id={`${num}-stars`}
                type="radio"
                checked={rating === num}
                onChange={handleRatingChange}
              />
              <label
                htmlFor={`${num}-stars`}
                className="reviews__rating-label form__rating-label"
                title={`Rating ${num}`}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use href="#icon-star" />
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>

        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={review}
          onChange={handleReviewChange}
        ></textarea>

        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{" "}
            <span className="reviews__star">rating</span> and describe your stay with at
            least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </div>
      </form>
      {submittedData && (
        <div className="reviews__submitted">
          <p className="reviews__success">✅ Thank you for your review!</p>
          <p><strong>Rating:</strong> {submittedData.rating} stars</p>
          <p><strong>Review:</strong> {submittedData.review}</p>
        </div>
      )}
    </>
  );
}

export { ReviewForm };
