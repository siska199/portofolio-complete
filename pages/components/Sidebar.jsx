import React from 'react'
import { useRouter } from 'next/router'
import SignUp from "./Auth"
import Modal from "../layouts/Modal"
import { menu } from '../../lib/data'

const Sidebar = ({showSidebar, setActiveId, activeId,}) => {
    const styleButtonAuth = "hover:border-[0.005rem] p-1 md:p-2 hover:bg-transparent border-slate-600 bg-slate-600 w-full text-[1rem] "
    const router = useRouter()
    const handleActiveLink = (id)=>{
        setActiveId(id)
        router.push(`/${id}`)
    }
  return (
    <Modal showModal={showSidebar} type="sidebar">
        <div className={` bg-gray-800 scroll-behavior flex flex-col min-h-screen w-[90%] sm:w-[20rem] z-[55] `}>
            <ul className=' mt-[5rem] text-white font-thin text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]'>
                {
                    menu.map((data,i)=>(
                        <li key={i} onClick={()=>handleActiveLink(data.id)} className={`${activeId==data.id&&"bg-white/10 "} transition-all duration-500 ease-in-out cursor-pointer pl-[2rem] py-3  hover:underline hover:underline-offset-1`} >{data.name}</li>
                    ))
                }
                <li className='px-[2rem] py-3 flex gap-3'>
                    <button className={styleButtonAuth}>Register</button>
                    <button className={styleButtonAuth}>Login</button>
                </li>
            </ul>
        </div>
    </Modal>
  )
}

export default Sidebar