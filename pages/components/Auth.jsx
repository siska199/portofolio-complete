import { NotificationManager } from "react-notifications";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../layouts/Modal";
import Input from "../atoms/Input";
import LoadingIcon from "../atoms/LoadingIcon";
import {
  handleLogin,
  handleModalAuth,
  handleRegister,
} from "../../redux/features/authSlice";
import { dataFormAuth } from "../../lib/validateFormAuth";

const Auth = () => {
  const dispatch = useDispatch();
  const initialForm = {
    username: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialForm);
  const loadingAuth = useSelector((state) => state.auth.value.loadingAuth);
  const errorAPI = useSelector((state) => state.auth.value.error);
  const [showError, setShowError] = useState(false);
  const modal = useSelector((state) => state.auth.value.modal);
  const type = useSelector((state) => state.auth.value.type);
  const [typeAuth, setTypeAuth] = useState(type);
  const disabledButtonLogin =
    type == "login" && form.email && form.password ? false : true;
  const disabledButtonRegister =
    type == "register" && form.username && form.email && form.password
      ? false
      : true;

  const handleTypeAuth = () => {
    typeAuth == "login" ? setTypeAuth("register") : setTypeAuth("login");
    setForm(initialForm);
  };

  const handleCloseAuth = () => {
    typeAuth == "login"
      ? dispatch(handleModalAuth("login"))
      : dispatch(handleModalAuth("register"));
    const html = document.querySelector("html");
    html.classList.remove("overflow-y-hidden");
  };

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(type == "login" ? handleLogin(form) : handleRegister(form)).then(
      () => {
        if (errorAPI) {
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 5000);
        } else {
          setForm(initialForm);
          handleCloseAuth();
          NotificationManager.success(
            "Success message",
            type == "login" ? "Login Success" : "Register Success",
            3000
          );
          type == "register" &&
            NotificationManager.success(
              "Success message",
              "Now you're have been login",
              3000
            );
        }
      }
    );
  };

  return (
    <Modal showModal={modal} type="auth">
      <form
        autoComplete="off"
        onClick={(e) => e.stopPropagation()}
        className={`relative text-cl200 dark:text-cl200 w-[22rem] sm:w-[25rem] h-auto p-[3rem] sm:py-[3rem] sm:px-[4rem] bg-cl900 dark:bg-cd900  border-cl700 dark:border-cd800 flex flex-col justify-center gap-[1.5rem] `}
      >
        <div
          onClick={() => handleCloseAuth()}
          className="absolute block sm:hidden -top-3 -right-3 cursor-pointer text-[1.5rem] bg-cl800 dark:bg-cd800 rounded-full p-1"
        >
          <MdClose />
        </div>
        <h1 className="text-center font-bold text-[1.5rem]">
          {typeAuth == "login" ? "Sign In" : "Sign Up"}
        </h1>
        {showError && (
          <p className="text-center bg-rose-500 text-gray-300 text-thin text-sm py-1 rounded-md">
            {errorAPI}
          </p>
        )}
        {dataFormAuth.map((data, i) => {
          if (typeAuth == "login" && data.name == "username") return "";
          return (
            <Input
              key={i}
              {...data}
              handleOnChange={handleOnChange}
              value={form[data.name]}
            />
          );
        })}

        <div>
          <button
            className={`text-center bg-cl700 dark:bg-cd800 w-full py-1 cursor-pointer disabled:cursor-default`}
            disabled={
              type == "login" ? disabledButtonLogin : disabledButtonRegister
            }
            onClick={(e) => handleOnSubmit(e)}
          >
            {typeAuth == "login" ? "Login" : "Register"}
            {loadingAuth && <LoadingIcon size="ml-[0.5rem] w-[1.1rem]" />}
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
