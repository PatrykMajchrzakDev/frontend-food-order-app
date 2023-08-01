import classes from "../../styles/CartItem.module.css";

const CartItem = (props) => {
  return (
    //container
    <div className={classes.container}>
      {/* left side */}
      <div>
        <span>{props.name}</span>
        <div className={classes["details-container"]}>
          <span className={classes.price}>{props.price.toFixed(2)}zł</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      {/* right side */}
      <div className={classes["btn-container"]}>
        <button className={classes.btn} onClick={props.onRemove}>
          -
        </button>
        <button className={classes.btn} onClick={props.onAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
