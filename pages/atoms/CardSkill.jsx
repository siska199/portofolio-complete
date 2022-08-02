import React from 'react'
import {MdVerified} from "react-icons/md"
const CardSkill = ({data}) => {
  return (
    <div  className="flex w-1/2 items-center gap-3 ">
        <div className='text-[1.4rem]'>
            <MdVerified/>
        </div>
        <div>
            <h1 className='flex items-center gap-3 font-bold'>{data.name}</h1>
            <p className='text-slate-400 font-thin'>{data.tingkat}</p>
        </div>
    </div> 
    )
}

export default CardSkill