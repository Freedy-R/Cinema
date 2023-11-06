import cat from "./icons/kfl9dvlt.bmp";
import { MovieChosenSection, MovieChosenSectionInfo } from "./style/ChoosenMovieStyle";
const ChoosenMovie = () => {
  return (
    <>
      <MovieChosenSection>
        <MovieChosenSectionInfo>
          <div className="movie_choosen_section_image">
            <img src={cat} alt="kot"></img>
          </div>
          <div>
            <h2>Tytuł</h2>
            <div style={{ display: "flex", flexDirection:"row",gap: "10px", transform: "translateY(-25px)" }}>
              <span>Nowość?</span>
              <span>Rok</span>
              <span>Wiek</span>
            </div>
            <span>Opis</span>
            <span>Obsada</span>
          </div>
        </MovieChosenSectionInfo>
      </MovieChosenSection>
    </>
  );
};
export default ChoosenMovie;
