import React from "react";
import { useRouter } from "next/router";
import Modal from "../layouts/Modal";
import { menu } from "../../lib/data";
import { useDispatch, useSelector } from "react-redux";
import { handleModalAuth } from "../../redux/features/authSlice";
import { handleModalMenu } from "../../redux/features/menuSlice";

const Sidebar = ({ showSidebar, setActiveId, activeId }) => {
  const dispatch = useDispatch();
  const modalMenu = useSelector((state) => state.menu.value.modal);
  const styleButtonAuth =
    "hover:border-[0.005rem] p-1 md:p-2 hover:bg-transparent border-cl600 dark:border-cd600 bg-cl600 dark:bg-cd600 w-full text-[1rem] ";
  const router = useRouter();
  const handleActiveLink = (id) => {
    setActiveId(id);
    router.push(`/${id}`);
  };
  const handleClickAuth = (type) => {
    dispatch(handleModalAuth(type));
    setTimeout(() => {
      dispatch(handleModalMenu(false));
    }, 100);
  };

  return (
    <Modal showModal={modalMenu} type="sidebar">
      <div
        onClick={(e) => e.stopPropagation()}
        className={` bg-cl800 dark:bg-cd800 scroll-behavior flex flex-col min-h-screen w-[90%] sm:w-[20rem] z-[55] `}
      >
        <ul className=" mt-[5rem] text-white font-thin text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]">
          {menu.map((data, i) => (
            <li
              key={i}
              onClick={() => handleActiveLink(data.id)}
              className={`${
                activeId == data.id && "bg-white/10 "
              } transition-all duration-500 ease-in-out cursor-pointer pl-[2rem] py-3 hover:underline hover:underline-offset-1`}
            >
              {data.name}
            </li>
          ))}
          {/* <li className='px-[2rem] py-3 flex gap-3'>
                    <button onClick={()=>handleClickAuth("register")} className={styleButtonAuth}>Register</button>
                    <button  onClick={()=>handleClickAuth("login")} className={styleButtonAuth}>Login</button>
                </li> */}
        </ul>
      </div>
    </Modal>
  );
};

export default Sidebar;
