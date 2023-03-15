import { Routes, Route, Navigate} from "react-router-dom";
import { lazy } from 'react';
import { SharedLayout } from './SharedLayouts/SharedLayouts';

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/Movies/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Movies/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Movies/Reviews/Reviews'));

export const App = () => {

  return (
   <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/"/>} />
      </Route>
    </Routes>
  </>
  );
};