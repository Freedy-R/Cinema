import { useState } from "react";
import cat from "../icons/kfl9dvlt.bmp";
const MovieSectionMovies = () => {
  const [movies, setMovies] = useState({ movies1: "Cat1", movies2: "Cat1"});
  const moviesAll = Object.values(movies);

  const renderMovies = () => {
    return moviesAll.map((movie, index) => (
      <div key={index} className="moviePhoto">
        <p>{movie}</p>
        <img src={cat}></img>
      </div>
    ));
  };
  return <>{renderMovies()}</>;
};
export default MovieSectionMovies;
