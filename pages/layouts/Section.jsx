import React from 'react'
import {GiButterfly} from "react-icons/gi"

const Section = ({children,id}) => {
  return (
    <article id={id} className='relative py-[5rem] md:py-0 text-slate-200 min-h-screen border-2 border-pink flex items-center justify-center gap-5'>
        <span className='absolute right-3 top-3 text-[2.5rem] md:text-[4rem]'>
            <GiButterfly/>
        </span>  
        {children}
    </article>
    )
}

export default Section