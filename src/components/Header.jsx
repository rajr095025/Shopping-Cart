import { useRef } from "react";

import CartModal from "./CartModal.jsx";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Header() {
  const { items } = useContext(CartContext); // const {} = use(CartContext); // we can use both "use" and "useContext" for consuming context, by using "use" we can call it inside a conditional block but "use" is available only above react 19 versions
  const modal = useRef();

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
