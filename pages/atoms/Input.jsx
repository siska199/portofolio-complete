import React, { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible,} from "react-icons/ai"

const Input = (props) => {
  const [invalid, setInvalid] = useState(false);
  const [hidePass, setHidePass] = useState(true)
  const { error, pattern,type, name, value } = props;

  const handleValidate = (e) => {
    const value = e.target.value;
    const re = new RegExp(`${pattern}`);
    console.log("test val: ", re.test(value));
    setInvalid((prev) => (re.test(value) ? false : true));
  };

  return (
    <div>
      <div className="container-input flex relative group flex-col border-[0.005rem] border-cl700 dark:border-cd800 px-3 p-2 ">
        <input
          type={name=="password"?hidePass?type:"text":type}
          name={name}
          placeholder=" "
          onInput={(e) => handleValidate(e)}
          className=" peer text-sm py-1 font-thin placeholder:hidden z-10 bg-transparent outline-none"
        />
        <label
          className="px-2 -mx-2 dark:text-cd400 text-cl400 font-semibold absolute text-sm peer-placeholder-shown:text-base  peer-placeholder-shown:translate-y-0 -translate-y-[1.4rem] peer-placeholder-shown:bg-transparent bg-cl900 dark:bg-cd900 peer-focus:text-sm peer-focus:-translate-y-[1.4rem] peer-focus:bg-cl900 dark:peer-focus:bg-cd900 transition-all duration-500 ease-linear"
          htmlFor={props.name}
        >
          {props.name}
        </label>
        {
          name =="password" &&(
            <div className="absolute block peer-placeholder-shown:hidden peer-focus:block right-0 mx-2 cursor-pointer text-[1.1rem] z-20 bottom-[0.7rem]" onClick={()=>setHidePass(!hidePass)}>
              {
                hidePass?<AiOutlineEyeInvisible/> : <AiOutlineEye className=""/> 
              }
            </div>
          )
        }
      </div>
      {invalid && (
        <p className="text-[0.7rem] text-cd400 text-justify mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
