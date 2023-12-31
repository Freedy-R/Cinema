import styled from "styled-components";
export const MovieChosenSection = styled.section`
  min-height: 100vh;
  display: grid;
`;
export const MovieChosenSectionInfo = styled.section`
  font-size: 1.5rem;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: auto 1fr;
  z-index: 2;
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
  h2 {
    transform: translateY(-30px);
  }
`;
export const Movie = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  img {
    max-width: 100%;
    aspect-ratio: 16/9;
    border-radius: 10px;
    transform: translateY(50px);
    @media (max-width: 760px) {
      width: 100%;
    }
  }
  @media (max-width: 760px) {
    justify-content: start;
  }
`;
export const Details = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: black;
  padding: 0.25rem;
  z-index: 1;
  gap: 0.2rem;
  h2,div,span{
    display: block;
  }
  p{
    font-size: 1.5rem;
  }
`;
export const ActorsSection = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  padding: 0.25rem;
  gap: 0.25rem;
`;
export const Actors = styled.div`
  display: flex;
  img{
    width: 100%;
    aspect-ratio: 4/3;
  }
`;