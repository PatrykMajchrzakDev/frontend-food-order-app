import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCloseConfirm}></div>;
};

const ModalOverlay = () => {
  return (
    <div>
      <header className="header">
        <h2>Your Cart</h2>
      </header>

      <div className="content"></div>

      <footer>
        <button>Pay Now</button>
        <button>Go back</button>
      </footer>
    </div>
  );
};

const CartModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseConfirm={props.onCloseConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default CartModal;
