import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { movieTypes } from "../../interfaces/interfaces";
import { getMovieDetails } from "../../services/theMovieAPI";
import ButtonGoBack from "../../components/generic/ButtonGoBack";
import Heading from "../../components/generic/Heading";
import s from "./MovieDetailsPage.module.css";
import Cast from "../../components/Cast";
import Reviews from "../../components/Reviews";

interface paramsTypes {
  movieId: string;
}

const MovieDetailsPage: React.FC = () => {
  const baseURL: string = "https://image.tmdb.org/t/p";
  const { movieId } = useParams<paramsTypes>();
  const { url } = useRouteMatch<string>();
  const location = useLocation();
  console.log(location);
  const [movie, setMovie] = useState<movieTypes | null>(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
    console.log(location);
  }, []);

  return (
    <>
      <ButtonGoBack />
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
          <Switch>
            <Route path={`${url}/cast`}>
              <Cast movieId={movieId} baseURL={baseURL} />
            </Route>

            <Route path={`${url}/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
