import React from 'react'
import Section from '../layouts/Section'
import {AiOutlineWhatsApp} from "react-icons/ai"
import Link from 'next/link'

const Introduction = () => {
  return (
    <Section id="introduction">
      <div className='flex flex-col text-center my-auto justify-center items-center gap-5 sm:w-3/4 lg:w-1/2 mx-auto'>
          <h5 className='uppercase tracking-[0.5rem] font-bold '>hi, my name is </h5>
          <h1 className='font-bold text-[2rem] md:text-[3rem] drop-shadow leading-[2rem] md:leading-[3.2rem]'>
            Siska Apriana Riafianti <br/>
            I am a frontend developer
          </h1>
          <p className='font-thin text-[0.8rem] md:text-[1.1rem] mx-auto '>I love 💕 to translate UI/UX design into nice looking website with attention to detail. Currently, i am focused build my skill in website development especially as a React js developer</p>
          <Link href="https://wa.me/6283111962313">
            <a target="_blank" className='mt-4 font-bold bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-2 rounded-sm flex items-center gap-2 text-sm md:text-[1rem]'> <span></span> Do you want to collaborate with me <span><AiOutlineWhatsApp/> </span> ?</a>
          </Link>

      </div>
    </Section>
  )
}

export default Introduction