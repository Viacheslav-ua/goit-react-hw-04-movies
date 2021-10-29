import { castTypes, reviewsTypes } from "../interfaces/interfaces";
const BASE_URL: string = "https://api.themoviedb.org/3/";
const API_KEY: string = "5bd79b6a46799781e96d1c38aa143fe8";

interface titleListType {
  id: number;
  title: string;
}

export const getTrending = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      return res.results.map((item: titleListType) => {
        return {
          id: item.id,
          title: item.title,
        };
      });
    });
};

export const searchMovies = (searchString: string) => {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}
  &language=en-US&query=${searchString}&page=1&include_adult=false`) 
  .then((res) => res.json());
};

export const getMovieDetails = (movieId: string) => {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`).then((res) =>
    res.json()
  );
};

export const getMovieCast = (movieId: string) => {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      return res.cast.map((item: castTypes) => {
        return {
          id: item.id,
          name: item.name,
          character: item.character,
          profile_path: item?.profile_path,
        };
      });
    });
};

export const getMovieReviews = (movieId: string) => {
  return fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((res) => {
      return res.results.map((item: reviewsTypes) => {
        return {
          id: item.id,
          author: item.author,
          content: item.content,
        };
      });
    });
};
