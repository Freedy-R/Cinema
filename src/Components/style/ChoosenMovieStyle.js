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
  grid-template-rows: 1fr 1fr;
  z-index: -2;
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
  z-index: -2;
  img {
    width: 50%;
    aspect-ratio: 4/3;
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
  z-index:-2;
  h2,div,span{
    display: block;
    z-index: -1;
  }
`;