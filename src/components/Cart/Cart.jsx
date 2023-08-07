import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "../../styles/Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import OrderForm from "./OrderForm";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isOrderClicked, setIsOrderClicked] = useState(false);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} zł`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const orderFoodBtnHandler = () => {
    setIsOrderClicked(!isOrderClicked);
  };
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes["cart-amount"]}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.footer}>
        <button onClick={props.onHideCart} className={classes.closeBtn}>
          Close
        </button>
        {hasItems && (
          <button className={classes.orderBtn} onClick={orderFoodBtnHandler}>
            Order
          </button>
        )}
      </div>
      {isOrderClicked && <OrderForm />}
    </Modal>
  );
};

export default Cart;
