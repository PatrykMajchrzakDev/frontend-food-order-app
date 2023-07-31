import "../../styles/Button.css";

const Button = (props) => {
  const customButtonStyles = {
    color: props.color,
    ["backgroundColor"]: props.backgroundColor,
    padding: props.padding,
  };
  return (
    <>
      <button
        className="btn"
        style={customButtonStyles}
        onClick={props.onClick}
      >
        {props.description}
      </button>
    </>
  );
};

export default Button;
