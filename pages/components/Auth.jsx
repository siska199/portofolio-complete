import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../layouts/Modal";
import Input from "../atoms/Input";
import { handleModalAuth } from "../../redux/features/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.auth.value.modal);
  const type = useSelector((state) => state.auth.value.type);
  const [typeAuth, setTypeAuth] = useState(type);

  const handleTypeAuth = () => {
    typeAuth == "login" ? setTypeAuth("register") : setTypeAuth("login");
  };

  const handleCloseAuth = () => {
    typeAuth == "login"
      ? dispatch(handleModalAuth("login"))
      : dispatch(handleModalAuth("register"));
    const html = document.querySelector("html");
    html.classList.remove("overflow-y-hidden");
  };
  return (
    <Modal showModal={modal} type="auth">
      <form
        onClick={(e) => e.stopPropagation()}
        className={`relative text-cl200 dark:text-cl200 w-[25rem] h-[25rem] p-[5rem] bg-cl900 dark:bg-cd900 shadow-lg flex flex-col justify-center gap-[1.5rem] `}
      >
        <div
          onClick={() => handleCloseAuth()}
          className="absolute -top-3 -right-3 cursor-pointer text-[1.5rem] bg-cl700 dark:bg-cd700 rounded-full p-1"
        >
          <MdClose />
        </div>
        <h1 className="text-center font-bold text-[1.5rem]">
          {typeAuth == "login" ? "Sign In" : "Sign Up"}
        </h1>
        {typeAuth == "register" && <Input name={"username"} />}
        <Input name={"email"} />
        <Input name={"password"} />
        <div>
          <button className={`text-center bg-cl700 dark:bg-cd800 w-full py-1 disabled:cursor-not-allowed`} disabled={true}>
            {typeAuth == "login" ? "Login" : "Register"}
          </button>
          <p className="text-center font-thin py-1">
            Already have an account ?
            <span
              onClick={() => handleTypeAuth()}
              className="pl-1 font-medium cursor-pointer"
            >
              {typeAuth == "login" ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </div>
      </form>
    </Modal>
  );
};

export default Auth;
