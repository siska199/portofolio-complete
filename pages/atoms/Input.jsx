import React from 'react'

const Input = ({name}) => {
  return (
    <div className='flex relative group flex-col border-[0.005rem] border-cl600 dark:border-cd600 px-3 p-2 '>
        <input placeholder=' ' className='peer font-thin placeholder:hidden z-10 bg-transparent outline-none' type="text" nema={name} />
        <label className='px-2 -mx-2 font-semibold absolute text-sm peer-placeholder-shown:text-base  peer-placeholder-shown:translate-y-0 -translate-y-[1.4rem] peer-placeholder-shown:bg-transparent bg-cl700 dark:bg-cd700 peer-focus:text-sm peer-focus:-translate-y-[1.4rem] peer-focus:bg-cl700 peer-focus:dark:bg-cd700 transition-all duration-500 ease-linear' htmlFor={name}>{name}</label>
    </div>
  )
}

export default Input