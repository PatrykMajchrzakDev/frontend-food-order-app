import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import CartIcon from "../assets/shopping-cart.png";
import classes from "../styles/HeaderCart.module.css";
const HeaderCart = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCardItems = cartCtx.items.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <img src={CartIcon} alt="cartIcon" className={classes.icon} />
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCardItems}</span>
      </button>
    </>
  );
};

export default HeaderCart;
