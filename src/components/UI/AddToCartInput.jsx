import React from "react";
import "../../styles/AddToCartInput.css";

const AddToCartInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className="label" htmlFor={props.id}>
        {props.description}
      </label>
      <input
        ref={ref}
        className="input"
        id={props.id}
        type={props.type}
        defaultValue={props.value}
        min={props.min}
        max={props.max}
      />
    </div>
  );
});

// Set the display name for the component
AddToCartInput.displayName = "AddToCartInput";

export default AddToCartInput;
