import CartIcon from "../assets/shopping-cart.png";
import "../styles/HeaderCart.css";
const HeaderCart = () => {
  return (
    <>
      <button className="button">
        <img src={CartIcon} alt="" className="icon" />
        <span>Your Cart</span>
        <span className="badge">2</span>
      </button>
    </>
  );
};

export default HeaderCart;
