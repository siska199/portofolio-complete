import React from 'react'
import Link from 'next/link'
import {ImHeartBroken} from "react-icons/im"
import { menu } from '../../lib/data'
import { useRouter } from 'next/router'
const Sidebar = ({showSidebar, setShowSidebar, setActiveId, activeId,}) => {
    const router = useRouter()
    const handleActiveLink = (id)=>{
        setActiveId(id)
        router.push(`/${id}`)
    }
  return (
    <section className={`${showSidebar?"translate-x-0 ":"-translate-x-full"} z-50 fixed top-0 left-0  w-full bg-black/50  transition-all  duration-1000 ease-in-out`}>
        <div className={` bg-gray-800 flex flex-col min-h-screen w-[20rem] z-[55] `}>
            <ul className=' mt-[5rem] text-white font-thin text-[1.5rem]'>
                {
                    menu.map((data,i)=>(
                        <li key={i} onClick={()=>handleActiveLink(data.id)} className={`${activeId==data.id&&"bg-white/10 "} cursor-pointer pl-[2rem] py-3 hover:bg-white/10 hover:underline hover:underline-offset-1`} key={i}>{data.name}</li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default Sidebar