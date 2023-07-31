import Button from "../UI/Button";
import AddToCartInput from "../UI/AddToCartInput";
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
        <AddToCartInput
          id={props.id}
          description="Amount"
          type="number"
          value={1}
          min={1}
          max={9}
        />
        <Button description={"+ Add"} />
      </div>
    </li>
  );
};

export default Meal;
