import "../../styles/Button.css";

const Button = (props) => {
  const customButtonStyles = {
    color: props.color,
    ["backgroundColor"]: props.backgroundColor,
    padding: props.padding,
  };
  return (
    <>
      <button className="btn" style={customButtonStyles}>
        {props.description}
      </button>
    </>
  );
};

export default Button;
