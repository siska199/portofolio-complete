import React from 'react'

const Section = ({children,id}) => {


  return (
    <article id={id} className={`relative ${id!="footer"&&"py-[3rem] md:py-[5rem]"} ${id=="introduction"&&"md:py-[8rem]"} text-slate-200  border-pink flex items-center justify-center gap-5`}> 
        {children}
    </article>
    )
}

export default Section