import { useRef, useState, useContext } from "react";
import Button from "../UI/Button";
import AddToCartInput from "../UI/AddToCartInput";
import CartContext from "../../store/cart-context";
import "../../styles/Meal.css";

const Meal = (props) => {
  //12
  const cartCtx = useContext(CartContext);

  //10
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  //9 continuation of /store/CartProvider
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    //13
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };
  return (
    <li className="container">
      <div className="meal-info">
        <span className="title">{props.name}</span>
        <span className="description">{props.description}</span>
        <span className="price">{props.price} zł</span>
      </div>
      <form className="add-to-cart" onSubmit={submitHandler}>
        <AddToCartInput
          //11
          ref={amountInputRef}
          id={props.id}
          description="Amount"
          type="number"
          value="1"
          min={1}
          max={9}
        />
        <Button description={"+ Add"} />
        {!amountIsValid && <p>Please enter a valid amount (1-9).</p>}
      </form>
    </li>
  );
};

Meal.displayName = "Meal";

export default Meal;
