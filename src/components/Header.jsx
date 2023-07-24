import Cart from "./Cart/Cart";
import "../styles/Header.css";
import heroImage from "../assets/meals-table-min.png";
const Header = () => {
  return (
    <>
      <header className="nav">
        <h2>TastyTrove</h2>
        <Cart className="cart" />
      </header>
      <div>
        <img src={heroImage} alt="A table full of different meals" />
      </div>
    </>
  );
};

export default Header;
