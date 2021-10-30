import React from "react";
import { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { movieTypes } from "../../interfaces/interfaces";
import { getMovieDetails } from "../../services/theMovieAPI";
import ButtonGoBack from "../../components/generic/ButtonGoBack";
import Heading from "../../components/generic/Heading";
import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("../../components/Cast"));
const Reviews = lazy(() => import("../../components/Reviews"));

interface paramsTypes {
  movieId: string;
}


const MovieDetailsPage: React.FC = () => {
  const baseURL: string = "https://image.tmdb.org/t/p";
  const location = useLocation<any>();
  const history = useHistory();
  const { movieId } = useParams<paramsTypes>();
  const { url } = useRouteMatch<string>();

  const [movie, setMovie] = useState<movieTypes | null>(null);
  const [prevLocation, setPrevLocation] = useState<any>()


  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
    setPrevLocation(location?.state?.from ?? "/")
  }, []);

  const onGoBack = () => {
    history.push(prevLocation)
  }

  return (
    <>
      <ButtonGoBack onGoBack={onGoBack} />
      {movie && (
        <>
          <div className={s.movieBlock}>
            <div className={s.imgBlock}>
              <img
                src={baseURL + "/w500" + movie?.backdrop_path}
                alt={movie.title}
              />
            </div>
            <div className={s.textBlock}>
              <Heading
                text={`${movie.title} (${movie.release_date.substr(0, 4)})`}
              />
              <h3 className={s.head3}>Overview</h3>
              <p className={s.text}>{movie.overview}</p>
              <h4 className={s.head4}>Genres</h4>
              <p className={s.text}>
                {movie.genres.map((item) => item.name).join(", ")}
              </p>
            </div>
          </div>
          <div className={s.addInfBlock}>
            <h4>Additional information</h4>
            <ul>
              <li>
                <NavLink
                  to={`${url}/cast`}
                  className={s.link}
                  activeClassName={s.activeLink}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/reviews`}
                  className={s.link}
                  activeClassName={s.activeLink}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Suspense fallback={<h1>LOAD...</h1>}>
            <Switch>
              <Route path={`${url}/cast`}>
                <Cast movieId={movieId} baseURL={baseURL} />
              </Route>

              <Route path={`${url}/reviews`}>
                <Reviews movieId={movieId} />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
