import AddToCartButton from "./AddToCartButton";
import AddToCartInput from "./AddToCartInput";
import "../../styles/Meal.css";

const Meal = () => {
  return (
    <div className="container">
      <div className="meal-info">
        <span>Sushi</span>
        <span>Fish and vegies</span>
        <span>22 zł</span>
      </div>
      <div className="add-to-cart">
        <AddToCartInput />
        <AddToCartButton />
      </div>
    </div>
  );
};

export default Meal;
