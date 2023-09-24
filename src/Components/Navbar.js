import "./Navbar.css";

import menu_dotted from "./icons/menu_dotted.png";
import search from "./icons/search.png";
import fireLogo from "./icons/logo.png";
import BurgerMenuButton from "./logic/burger-menu";
const Navbar = () => {
  return (
    <section className="Navbar_section">
      <section className="Navbar">
        <section className="logo_section " aria-hidden="true">
          <BurgerMenuButton></BurgerMenuButton>
          <img src={fireLogo} alt=""></img>
          <h1 className="logo_main">JW - Just Watch It</h1>
        </section>
        <section className="Navbar_right_section">
          <img src={search} id="search_button" alt="wyszukaj"></img>
          <div className="search_frame hidden">
            <input type="search" className="Search_bar" />
          </div>
          <img
            src={menu_dotted}
            id="settings_button"
            alt="ustawienia konta"
          ></img>
        </section>
      </section>
    </section>
  );
};
export default Navbar;
