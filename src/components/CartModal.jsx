import { forwardRef, useImperativeHandle, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import { CartContext } from "../store/shopping-cart-context";

const CartModal = forwardRef(function Modal(
  {  title, actions },
  ref
) {
  const { items, onUpdateCartItemQuantity } = useContext(CartContext);  // const {} = use(CartContext); // we can use both "use" and "useContext" for consuming context, by using "use" we can call it inside a conditional block but "use" is available only above react 19 versions
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart items={items} onUpdateItemQuantity={onUpdateCartItemQuantity} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
