import React from "react";
import { useDispatch } from "react-redux";
import { handleModalAuth } from "../../redux/features/authSlice";
import { handleModalMenu } from "../../redux/features/menuSlice";
import { handleModalComments } from "../../redux/features/projectSlice";

const Modal = ({ showModal, children, type }) => {
  const dispatch = useDispatch();

  let customeStyle;
  switch (type) {
    case "sidebar":
      customeStyle = `${
        showModal ? "translate-x-0 " : "-translate-x-full"
      } bg-black/90 `;
      break;
    case "auth":
      customeStyle = `${
        showModal ? "translate-x-0 " : "-translate-x-full"
      } h-full grid place-items-center bg-black/90`;
      break;
    case "comments":
      customeStyle = `${
        showModal ? "translate-x-0 " : "-translate-x-full"
      } h-full py-[3rem] grid place-items-center bg-white/30`;
      break;
    default:
      break;
  }
  const handleCloseModal = () => {
    switch (type) {
      case "auth":
        dispatch(handleModalAuth(false));
        break;
      case "sidebar":
        dispatch(handleModalMenu(false));
        break;
      case "comments":
        dispatch(handleModalComments(false))
        break;
    }
    const html = document.querySelector("html");
    html.classList.remove("overflow-y-hidden");
  };
  return (
    <section
      onClick={() => handleCloseModal()}
      className={`${customeStyle} fixed z-[99] top-0 left-0  w-full transition-all  duration-1000 ease-in-out`}
    >
      {children}
    </section>
  );
};

export default Modal;
