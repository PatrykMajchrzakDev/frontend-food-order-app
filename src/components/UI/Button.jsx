import "../../styles/Button.css";

const Button = (props) => {
  return (
    <>
      <button className="btn" onClick={props.onClick}>
        {props.description}
      </button>
    </>
  );
};

export default Button;
