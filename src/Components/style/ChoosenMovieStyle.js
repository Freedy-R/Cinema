import styled from "styled-components";
export const MovieChosenSection = styled.section`
    min-height: 100vh;
    display:grid;
`;
export const MovieChosenSectionInfo = styled.section`
    font-size: 1.5rem;
    background-color: black;
    padding: 1rem;
    display: grid;
    width: 100%;
    grid-template-rows: auto 1fr;
    img {
        width: 100%;
        aspect-ratio: 16/9;
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
    }
    h2{
        transform: translateY(-30px);
    }
`;