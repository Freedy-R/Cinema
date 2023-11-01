import styled from "styled-components";
export const MoviesSectionStyle = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  aspect-ratio: 16/9;
`;
export const MoviesBanner = styled.section`
  position: relative;
  z-index: -2;
  img {
    width: 100%;
    aspect-ratio: 16/9;
  }
`;
export const MoviesSectionPhotoStyle = styled.section`
  position: relative;
  display: grid;
  z-index: -1;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: auto 1fr;
  gap: 0.5rem;
  transform: translateY(-3rem);
`;
export const moviePhoto = styled.div`
  display: grid;
  z-index: -1;
  position: relative;
  grid-auto-rows: auto 1fr;
  text-align: center;
  font-size: 1.3rem;
  border-radius: 20px;
  img {
    width: 100%;
    aspect-ratio: 0;
  }
`;
