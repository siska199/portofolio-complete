import React, { useState } from 'react'
import Modal from "../layouts/Modal"
import Input from "../atoms/Input"

const Auth = () => {
  const [typeAuth, setTypeAuth] = useState("login")

  const handleTypeAuth = ()=>{
    typeAuth=="login"?setTypeAuth("register"):setTypeAuth("login")
  }

  return (
    <Modal showModal={false} type="auth">
        <form className='text-white w-[25rem] h-[25rem] p-[5rem] bg-gray-800 shadow-lg flex flex-col justify-center gap-[1.5rem] ' >
            <h1 className='text-center font-bold text-[1.5rem]'>{typeAuth=="login"?"Sign In":"Sign Up"}</h1>
            {typeAuth=="register"&&            
              <Input name={"username"}/>
            }
            <Input name={"email"}/>
            <Input name={"password"}/>
            <div>
              <button className='text-center bg-gray-500 w-full py-1'>{typeAuth=="login"?"Login":"Register"}</button>
              <p className='text-center font-thin py-1'>Already have an account ? 
                <span onClick={()=>handleTypeAuth()} className='pl-1 font-medium cursor-pointer'>
                {typeAuth=="login"?"Sign Up":"Sign In"}
                </span>
              </p>
            </div>
        </form>
    </Modal>
  )
}

export default Auth