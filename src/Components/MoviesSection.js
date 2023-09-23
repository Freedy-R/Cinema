import "./MoviesSection.css";
import MovieSectionMovies from "./logic/movies-section-logic";
import cat from "./icons/kfl9dvlt.bmp";
const MoviesSection = () => {
  return (
    <section className="MoviesSection">
      <section className="MoviesBanner">
        <img src={cat}></img>
      </section>
      <section className="moviesSection_Photo">
        <MovieSectionMovies></MovieSectionMovies>
      </section>
    </section>
  );
};
export default MoviesSection;
