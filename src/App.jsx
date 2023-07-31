import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MealsForm from "./components/MealsForm";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import "./styles/App.css";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      <Hero />
      <MealsForm />
    </CartProvider>
  );
}

export default App;
