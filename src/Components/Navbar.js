import "./Navbar.css";
import burger_menu from "./icons/burger-menu.png";
import menu_dotted from "./icons/menu_dotted.png";
import search from "./icons/search.png";
import fireLogo from "./icons/logo.png";
const Navbar = () => {
  return (
    <section className="Navbar">
      <img className="burger_menu_logo" id="burger_menu_button" src={burger_menu} alt="menu"></img>
      
      <section className="logo_section " aria-hidden="true">
        <img src={fireLogo} alt=""></img>
        <h1 className="logo_main">JW - Just Watch It</h1>
      </section>
      
      <img src={search} id="search_button" alt="wyszukaj"></img>
      
      <div className="search_frame hidden">
        <input type="search" className="Search_bar" />
      </div>
      <img src={menu_dotted} id="settings_button" alt="ustawienia konta"></img>
    </section>
  );
};
export default Navbar;
