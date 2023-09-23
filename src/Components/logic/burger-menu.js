import { useState } from "react";
import burger_menu from "../icons/burger-menu.png";
import MovieCategories from "./movies-categories";
import "./burger-menu.css";
const BurgerMenuButton = () => {
  const [isActive, setIsActive] = useState(false);
  const burger_menuClick = (event) => {
    setIsActive(current => !current);
  }
  const holdWindowVisible = () =>{
    setIsActive(false);
  }
  return (
    <button onClick={burger_menuClick}>
      <img className="burger_menu_logo" src={burger_menu} alt="menu"></img>
      <section onClick={holdWindowVisible} className={isActive ? 'burger_menu_movies_section slide' : 'burger_menu_movies_section hidden'}>
        <MovieCategories></MovieCategories>
      </section>
    </button>
  );
};
export default BurgerMenuButton;
