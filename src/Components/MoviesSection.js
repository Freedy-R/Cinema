import MovieSectionMovies from "./logic/movies-section-logic";
import { MoviesSectionStyle, MoviesBanner, MoviesSectionPhotoStyle } from "./style/MovieSectionStyle";
import cat from "./icons/kfl9dvlt.bmp";
const MoviesSection = () => {
  return (
    <MoviesSectionStyle>
      <MoviesBanner>
        <img src={cat} alt="banner"></img>
      </MoviesBanner>
      <MoviesSectionPhotoStyle>
        <MovieSectionMovies />
      </MoviesSectionPhotoStyle>
    </MoviesSectionStyle>
  );
};
export default MoviesSection;
