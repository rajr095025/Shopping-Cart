import { useState, use, useContext } from "react";
import CartProvider from "./store/shopping-cart-context.jsx";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";

function App() {
  return (
    <CartProvider>
      <Header />
      <Shop />
    </CartProvider>
  );
}

export default App;
