import { useReducer } from "react";
import CartContext from "./cart-context";
//9 is Meals/Meal.jsx

//1
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//2
//reducer outside component because it doesnt need anything fro mthe component and I dont
//want it to be reevaluated everytime it refeshes
const cartReducer = (state, action) => {
  //8
  //conditionals to get correct identifier
  if (action.identifier === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //checks if item of the same id already exists and instead of adding it multiple times its just
    //gonna update amount
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //line below is only work if item of this id already exists in an array
    //if not its gonna be null otherwise this item will be set to that item
    const exisitingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (exisitingCartItem) {
      const updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.identifier === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  //3
  //as part of reducer, new state snapshot have to be returned
  return defaultCartState;
};

//4
//useReducer has to be called in the CartProvider
const CartProvider = (props) => {
  //useReducer returns array with exactly 2 elements so they have to be pulled off and stored in separate constants
  //first element is state snapshot, 2nd is a function that allows to dispatch an action the the reducer
  //as first arg, reducer function has to be pointed here and initial state which is defaultCartState
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  //5 added dispatchCartAction and it takes variable, in this case its object
  const addItemToCartHandler = (item) => {
    //6
    //identifier is needed to later know which obj has to be accessed and 2nd prop is to store item arg
    dispatchCartAction({ identifier: "ADD_ITEM", item: item });
  };

  //7
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ identifier: "REMOVE_ITEM", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
