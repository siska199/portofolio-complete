import React from 'react'
import {GiButterfly} from "react-icons/gi"

const Section = ({children}) => {
  return (
    <article className='relative  text-slate-200 min-h-screen flex items-center justify-center gap-5'>
        <span className='absolute right-0 top-0 text-[4rem]'>
            <GiButterfly/>
        </span>  
        {children}
    </article>
    )
}

export default Section