import "../../styles/AddToCartInput.css";

const AddToCartInput = (props) => {
  return (
    <div>
      <label className="label">{props.description}</label>
      <input className="input" type={props.type} defaultValue={props.value} />
    </div>
  );
};

export default AddToCartInput;
