import { useState, useEffect } from 'react';
import { fetchMovie } from "../../api/fetchApi";
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovie(`/trending/movie/day`)
      .then(data => {
        setMovies(data.results);
      })
      .catch(console.log);
  }, []);

  if (!movies) {
    return;
  }

  return (
      <MovieList movies={movies} titlePage={'Trending today'} />
  );
};

export default Home;