import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "../../styles/Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import OrderForm from "./OrderForm";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
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
  const footerButtons = (
    <div className={classes.footer}>
      <button
        type="button"
        onClick={props.onHideCart}
        className={classes.closeBtn}
      >
        Close
      </button>
      {hasItems && (
        <button
          type="button"
          className={classes.orderBtn}
          onClick={orderFoodBtnHandler}
        >
          Order
        </button>
      )}
    </div>
  );

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-262f1-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes["cart-amount"]}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {footerButtons}

      {isOrderClicked && <OrderForm onSubmit={submitOrderHandler} />}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = <p>Successfully sent the order!</p>;

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
