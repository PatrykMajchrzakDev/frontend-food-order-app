import "../../styles/AddToCartInput.css";

const AddToCartInput = ({ id, description, type, value, min, max }) => {
  return (
    <div>
      <label className="label" htmlFor={id}>
        {description}
      </label>
      <input
        className="input"
        id={id}
        type={type}
        defaultValue={value}
        min={min}
        max={max}
      />
    </div>
  );
};

export default AddToCartInput;
