import { useState } from "react";
import burgerMenu_Icon from "../icons/burger-menu.png";
import MovieCategoryList from "./movies-categories-logic";
import "./logic_style/burger-menu.css";

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
      <img className="burger_menu_logo" src={burgerMenu_Icon} alt="menu"></img>
      <section onClick={holdWindowVisible} className={isActive ? 'burger_menu_movies_section slide' : 'burger_menu_movies_section hidden'}>
        <MovieCategoryList></MovieCategoryList>
      </section>
    </button>
  );
};
export default BurgerMenuButton;
