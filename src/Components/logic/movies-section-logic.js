import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieSectionMovies = () => {
  const [movies, setMovies] = useState([]);
  const moviesAll = Object.values(movies);

  useEffect(() => {
    const fetch = require("node-fetch");

    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pl-PL&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTVhMzVmNmZjMzllMjZjMzBhNmVlOWQwNjdjZWY3YSIsInN1YiI6IjY1MjI3MGVhZWE4NGM3MDBhZWVlNTE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QiPF-6Wp-bXF_zvYMLy71Ryt3muiE0EJ6WslCE_FfEU",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.error("error:" + err));
  });

  const renderMovies = () => {
    return moviesAll.map((movie, index) => (
      <Link key={movie.id} to="/Cinema/chosen">
      <div className="moviePhoto" tabIndex={movie.id}>
        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} />
        <p>{movie.title}</p>
      </div>
    </Link>
    ));
  };
  return <>{renderMovies()}</>;
};
export default MovieSectionMovies;
