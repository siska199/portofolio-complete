import React from 'react'
import Section from '../layouts/Section'

const AboutMe = () => {
    const styleMarkStack = "bg-slate-500 px-2 text-sm font-bold mx-1"
    const styleButton = " p-2 border-[0.005rem] border-slate-600 hover:bg-slate-600"
  return (
    <Section>
        <div className='flex w-3/4 justify-center items-center'>
            <div className=' flex p-4 '>
                <img src="me.png" className='object-contain m-auto w-[20rem] h-[25rem]' alt="" />
            </div>
            <div className='w-1/2 flex flex-col gap-4'>
                <h1 className='text-[3rem] font-bold'>About Me </h1>
                <p className='text-justify text-[1.2rem]  font-thin'>
                    I love to build the frontend of website using <span className={styleMarkStack}>react JS</span> 
                    more specifically using <span className={styleMarkStack}>Next JS</span> as the frontend framework 
                    and using <span className={styleMarkStack}>tailwind</span> as the css framework to beautify the 
                    website and make the website more modern. Besides that, I can build backend applications using 
                    <span className={styleMarkStack}>Express JS</span> as a backend framework, and using 
                    <span className={styleMarkStack}>Firebase</span>, Mongodb with 
                    <span className={styleMarkStack}>Mongoose</span>, and <span className={styleMarkStack}>MySQL</span> 
                    with ORM as database. I can also using <span className={styleMarkStack}>Graphql</span> as the query language.
                </p>
                <p className='text-sm font-bold'>
                    Note: i am a progremmer (Profesional Google Reasearcher) 
                </p>
                <div className='flex gap-4 font-semibold'>
                    <button className={styleButton}>Download My CV</button>
                    <button className={styleButton}>View My Github</button>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default AboutMe