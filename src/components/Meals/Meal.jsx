import AddToCartButton from "../UI/AddToCartButton";
import AddToCartInput from "./AddToCartInput";
import "../../styles/Meal.css";

const Meal = (props) => {
  return (
    <li className="container">
      <div className="meal-info">
        <span className="title">{props.name}</span>
        <span className="description">{props.description}</span>
        <span className="price">{props.price} zł</span>
      </div>
      <div className="add-to-cart">
        <AddToCartInput description={"Amount"} type="number" value={1} />
        <AddToCartButton />
      </div>
    </li>
  );
};

export default Meal;
