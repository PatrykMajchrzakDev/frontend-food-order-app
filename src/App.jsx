import Header from "./components/Header";
import Hero from "./components/Hero";
import MealsForm from "./components/MealsForm";
import Cart from "./components/Cart/Cart";
import "./styles/App.css";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <Hero />
      <MealsForm />
    </>
  );
}

export default App;
