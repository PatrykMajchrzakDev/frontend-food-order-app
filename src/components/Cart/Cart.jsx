import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "../../styles/Cart.css";
const Cart = () => {
  const cartItems = (
    <ul className="cart-items">
      {[{ key: 1, id: 1, name: "Sushi", amount: 2, price: 19.99 }].map(
        (item) => (
          <li key={item.key}>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className="cart-amount">
        <span>Total Amount</span>
        <span>31.11</span>
      </div>

      <div className="footer">
        <Button
          color={"white"}
          backgroundColor={"darkred"}
          description={"Close"}
          padding={"0.5rem 3rem"}
        />
        <Button
          color={"white"}
          backgroundColor={"rgb(57, 85, 138)"}
          description={"Order"}
          padding={"0.5rem 3rem"}
        />
      </div>
    </Modal>
  );
};

export default Cart;
