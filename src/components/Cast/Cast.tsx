import React from "react";
import { useState, useEffect } from "react";
import { castTypes } from "../../interfaces/interfaces";
import { getMovieCast } from "../../services/theMovieAPI";
interface propTypes {
  movieId: string;
  baseURL: string;
}

const Cast: React.FC<propTypes> = ({ movieId, baseURL }) => {
  const [cast, setCast] = useState<castTypes[] | null>(null);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, []);
  return (
    <ul>
      {cast &&
        cast.map((item: castTypes) => (
          <li key={item.id}>
            {item.profile_path && (
              <img
                src={baseURL + "/w200" + item.profile_path}
                alt={item.name}
              />
            )}
            <h4>{item.name}</h4>
            <p>Character: {item.character}</p>
          </li>
        ))}
    </ul>
  );
};
export default Cast;
