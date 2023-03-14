import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from "../../../api/fetchApi";

const Reviews = () => {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovie(`movie/${movieId}/reviews`)
      .then(data => {
        setReview(data.results);
      })
      .catch(console.log);
  }, [movieId]);

  if (!review) {
    return;
  }

  return (
    <>
      {review.length > 0 ? (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              Author: <b>{author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Reviews not found</div>
      )}
    </>
  );
};

export default Reviews;