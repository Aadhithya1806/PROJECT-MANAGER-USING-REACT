import React, {
  Children,
  createElement,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";
const Modal = forwardRef(({ children, btnContent }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md  shadow-md"
      ref={dialog}
    >
      {children}

      <form method="dialog">
        <button className="rounded bg-stone-700 text-stone-200 px-4 py-2  hover:bg-stone-900  hover:text-stone-200 ">
          {btnContent}
        </button>
      </form>
    </dialog>,

    document.getElementById("modal")
  );
});

export default Modal;
