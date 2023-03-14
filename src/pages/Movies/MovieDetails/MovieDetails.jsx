import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMovie } from "../../../api/fetchApi";
import Additional from '../../../components/Additional/Additional';
import InfoMovie from '../../../components/InfoMovie/InfoMovie';
import GoBackButton from '../../../components/GoBackButton/GoBackButton';
import {Loader } from '../../../components/Loading/Loading';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
  
    useEffect(() => {
        fetchMovie(`movie/${movieId}`)
            .then(data => {
                setMovie(data);
            })
            .catch(console.log);
    }, [movieId]);

    if (!movie) {
        return;
    }

    return (
        <>
            <GoBackButton backLinkHref={backLinkHref} />
             <InfoMovie movie={movie} />
            <Additional location={backLinkHref} />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>  
        </>
    );
}

export default MovieDetails;