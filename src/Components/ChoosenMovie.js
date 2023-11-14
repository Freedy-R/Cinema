import { useParams } from "react-router-dom";
import { MovieChosenSection, MovieChosenSectionInfo,Movie, Details } from "./style/ChoosenMovieStyle";
import { useState, useEffect } from "react";

const ChoosenMovie = () => {

  const [movie, setMovie] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=pl-PL`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTVhMzVmNmZjMzllMjZjMzBhNmVlOWQwNjdjZWY3YSIsInN1YiI6IjY1MjI3MGVhZWE4NGM3MDBhZWVlNTE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QiPF-6Wp-bXF_zvYMLy71Ryt3muiE0EJ6WslCE_FfEU', // Your API key here
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setMovie(json);
      } catch (err) {
        console.error('error:', err);
      }
    };

    fetchMovie();
  }, [id]); // Make sure to include id as a dependency

  // Conditional rendering based on whether movie is defined
  if (!movie) {
    return <p>Loading...</p>; // or any loading indicator
  }

  return (
      <MovieChosenSection>
        <MovieChosenSectionInfo>
          <Movie>
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="movie poster"/>
          </Movie>
          <Details>
          <h2>{movie.original_title}</h2>
            <div style={{ display: "flex", flexDirection:"row",gap: "10px", transform: "translateY(-25px)" }}>
            <p>wydano: {movie.release_date}</p>
            </div>
            <p>{movie.overview}</p>
          </Details>
        </MovieChosenSectionInfo>
      </MovieChosenSection>
  );
};
export default ChoosenMovie;
