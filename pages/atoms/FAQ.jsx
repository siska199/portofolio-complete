import React, { useState } from 'react'
import {BsFillPlusCircleFill,} from "react-icons/bs"
import {AiFillMinusCircle} from "react-icons/ai"
const FAQ = ({data}) => {
  const styleIcon = "transition-all  duration-1000 ease-in-out cursor-pointer"
  const [expand, setExpand] = useState(false)

  const handleExpand = ()=>{
    setExpand(!expand)
  }
  return (
    <section className=''>
        <div  onClick={()=>handleExpand()} className='cursor-pointer flex items-center gap-2 border-[0.05rem] text-lg border-cl800 dark:border-cd800  p-2'>
          {
            expand?<AiFillMinusCircle className={styleIcon}/>:<BsFillPlusCircleFill className={styleIcon} />
          }
          <p className='font-bold'>{data?.question}</p>
        </div>
        <ul className={`max-h-0 ${expand&&"accordion-content"}  scrollbar-hidden  transition-all duration-500 ease-in-out overflow-hidden font-thin text-sm text-cl300 dark:text-cd300 border-l-[0.01rem] border-cl800 dark:border-cd800  `}>
          {
            data.answears.map((data,i)=>(
              <li key={i}>- {data}</li>
            ))
          }
        </ul>

    </section>
  )
}

export default FAQ