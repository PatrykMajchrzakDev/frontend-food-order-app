import "../../styles/Cart.css";
import cartIcon from "../../assets/shopping-cart.png";
const Cart = () => {
  return (
    <div className="cart-button">
      <img src={cartIcon} alt="" />
      <p>Your Cart</p>
      <div className="order-counter">1</div>
    </div>
  );
};

export default Cart;
