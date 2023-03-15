import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './MovieList.module.scss';

const MovieList = ({ movies, titlePage }) => {
    const location = useLocation();
    
    return (
    <>
        {titlePage && <h1 className={style.title}>{titlePage}</h1>}
        <ul className={style.list}>
        {movies.map(({ id, title, name }) => (
          <li key={id} className={style.item}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={style.link}
            >
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </>
    );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
  titlePage: PropTypes.string,
};

export default MovieList;