import React from "react";

const Actor = ({name, character, photo}) =>{
    return(
    <div>
        <img src={"https://image.tmdb.org/t/p/w185/"+photo}/*przez to psuje się obrazek główny prawdopodbnie do rozwiązania w css*/ alt="aktor"/>
        <p>{name}</p>
        <p>jako {character}</p>
    </div>
    )
}

export default Actor;