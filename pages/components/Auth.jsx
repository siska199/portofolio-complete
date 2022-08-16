import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../layouts/Modal";
import Input from "../atoms/Input";
import { handleModalAuth } from "../../redux/features/authSlice";
import { dataFormAuth } from "../../lib/validateFormAuth";

const Auth = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username:"",
    email:"",
    password:""
  })
  const modal = useSelector((state) => state.auth.value.modal);
  const type = useSelector((state) => state.auth.value.type);
  const [typeAuth, setTypeAuth] = useState(type);
  const disabledButtonLogin = ((type=="login") && (form.email&&form.password))?false:true
  console.log("button login: ", disabledButtonLogin)
  const disabledButtonRegister = ((type=="register") && (form.username&&form.email&&form.password))?false:true
  console.log("button register: ", disabledButtonRegister)

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

  const handleOnChange = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleOnSubmit = ()=>{
    console.log("form: ", form)
  }
  

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

        {dataFormAuth.map((data, i) => {
          if (typeAuth == "login" && data.name == "username") return"";
          return <Input key={i} {...data} handleOnChange={handleOnChange} />;
        })}

        <div>
          <button
            className={`text-center bg-cl700 dark:bg-cd800 w-full py-1 disabled:cursor-default`}
            disabled={type=="login"?disabledButtonLogin:disabledButtonRegister}
            onClick={()=>handleOnSubmit()}
          >
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
