import cat from "./icons/kfl9dvlt.bmp";
import { MovieChosenSection, MovieChosenSectionInfo,Movie, Details } from "./style/ChoosenMovieStyle";
const ChoosenMovie = () => {
  return (
    <>
      <MovieChosenSection>
        <MovieChosenSectionInfo>
          <Movie>
            <img src={cat} alt="kot"></img>
          </Movie>
          <Details>
            <h2>Tytuł</h2>
            <div style={{ display: "flex", flexDirection:"row",gap: "10px", transform: "translateY(-25px)" }}>
              <span>Nowość?</span>
              <span>Rok</span>
              <span>Wiek</span>
            </div>
            <span>Opis</span>
            <span>Obsada</span>
          </Details>
        </MovieChosenSectionInfo>
      </MovieChosenSection>
    </>
  );
};
export default ChoosenMovie;
