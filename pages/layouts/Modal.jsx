import React from "react";
import { useDispatch } from "react-redux";
import { handleModalAuth } from "../../redux/features/authSlice";
import { handleModalMenu } from "../../redux/features/menuSlice";

const Modal = ({ showModal, children, type }) => {
  const dispatch = useDispatch();

  let customeStyle;
  switch (type) {
    case "sidebar":
      customeStyle = `${
        showModal ? "translate-x-0 " : "-translate-x-full"
      } bg-black/50 `;
      break;
    case "auth":
      customeStyle = `${
        showModal ? "translate-y-0" : "-translate-y-full"
      } h-full grid place-items-center bg-black/90`;
      break;
    default:
      break;
  }
  const handleCloseModal = () => {
    switch (type) {
      case "auth":
        dispatch(handleModalAuth());
        break;
      case "sidebar":
        dispatch(handleModalMenu())
        break;
    }
    const html = document.querySelector('html')
    html.classList.remove("overflow-y-hidden")
  };
  return (
    <section
      onClick={() => handleCloseModal()}
      className={`${customeStyle} fixed z-[99] top-0 left-0  w-full h-full transition-all  duration-1000 ease-in-out`}
    >
      {children}
    </section>
  );
};

export default Modal;
