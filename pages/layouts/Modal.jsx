import React from 'react'

const Modal = ({showModal, children, type}) => {

    let customeStyle
    switch(type){
        case "sidebar":
            customeStyle=`${showModal?"translate-x-0 ":"-translate-x-full"} bg-black/50 `
            break;
        case "auth":
            customeStyle = `${showModal?"translate-y-0":"-translate-x-full"} h-full grid place-items-center bg-black/90`
            break;
        default:
            break;
    }

  return (
    <section className={`${customeStyle} fixed z-[99] top-0 left-0  w-full  transition-all  duration-1000 ease-in-out`}>
        {children}
    </section>
  )
}

export default Modal