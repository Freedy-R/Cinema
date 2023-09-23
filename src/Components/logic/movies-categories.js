import { useState } from "react";

/**
 * Description
 * @returns {any}
 */
const MovieCategories = () => {
    const [moviesCategory, setMoviesCategory] = useState({moviesCategory1:'Horror',moviesCategory2:'Komedia'});
    const moviesCategories = Object.values(moviesCategory);
    
    const renderMoviesCategories = () =>{
        return moviesCategories.map((movieCategory, index) => (
          <a key={index}>
            <p>{movieCategory}</p> 
          </a>
        ));
    }
    return(
        <>
            {renderMoviesCategories()}
        </>
    )
}
export default MovieCategories
