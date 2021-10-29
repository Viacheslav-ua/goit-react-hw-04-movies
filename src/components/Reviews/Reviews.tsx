import React from "react";
import { useState, useEffect } from "react";
import { reviewsTypes } from "../../interfaces/interfaces";
import { getMovieReviews } from "../../services/theMovieAPI";

const Reviews: React.FC<{ movieId: string }> = ({ movieId }) => {
  const [reviews, setReviews] = useState<reviewsTypes[]>([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, []);

  return (
    <ul>
      {reviews.length > 0 ?
        (reviews.map((item: reviewsTypes) => (
          <li key={item.id}>
            <h3>Author: {item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))) : (<p>We don't have any reviews for this movie</p>)
      }
    </ul>
  );
};
export default Reviews;
