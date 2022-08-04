import React from 'react'

const Section = ({children,id}) => {


  return (
    <article id={id} className={`relative pt-[10rem] text-slate-200  border-pink flex items-center justify-center gap-5`}> 
        {children}
    </article>
    )
}

export default Section