import heroImage from "../assets/meals-table-min.png";
import HeaderCart from "./HeaderCart";
import "../styles/Header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <h1>TastyTrove</h1>
        <HeaderCart className="header-cart" />
      </header>
      <div className="main-image">
        <img src={heroImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
