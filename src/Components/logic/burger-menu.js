import { useState } from "react";
import burger_menu from "../icons/burger-menu.png";
const BurgerMenuButton = () => {
  const [isActive, setIsActive] = useState(false);
  const burger_menuClick = (event) => {
    setIsActive(current => !current);
  };

  return (
    <button onClick={burger_menuClick}>
      <img className="burger_menu_logo" src={burger_menu} alt="menu"></img>
      <section className={isActive ? 'burger_menu_movies_section hidden slide' : 'burger_menu_movies_section'}>
        <p>Przykładowy film</p>
        <p>Przykładowy film</p>
      </section>
    </button>
  );
};
export default BurgerMenuButton;
