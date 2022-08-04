import React from 'react'
import Link from 'next/link'
import Section from '../layouts/Section'

const AboutMe = () => {
    const styleMarkStack = "bg-slate-500 px-2 text-[0.7rem] md:text-sm font-bold mx-1"
    const styleButton = "p-1 md:p-2 text-[0.8rem] md:text-[1rem] border-[0.005rem] border-slate-600 hover:bg-slate-600"
  return (
    <Section id="about-me">
        <div className='flex flex-col md:flex-row px-5 sm:w-3/4 justify-center items-center'>
            <div className=' flex md:p-2 lg:p-4 '>
                <img src="me.png" className='object-contain m-auto w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[25rem]' alt="" />
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-4'>
                <h1 className='header-section-menu'>About Me 🧕</h1>
                <p className='text-justify text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem] font-thin leading-[1rem] md:leading-[1.5rem] lg:leading-[1.7rem]'>
                    I love to build the frontend of website using <span className={styleMarkStack}>react JS</span> 
                    more specifically using <span className={styleMarkStack}>Next JS</span> as the frontend framework 
                    and using <span className={styleMarkStack}>tailwind</span> as the css framework to beautify a 
                    website and make a website more modern. Besides that, I can build backend applications using 
                    <span className={styleMarkStack}>Express JS</span> as a backend framework, and using 
                    <span className={styleMarkStack}>Firebase</span>, Mongodb with 
                    <span className={styleMarkStack}>Mongoose</span>, and <span className={styleMarkStack}>MySQL</span> 
                    with ORM as database. I can also using <span className={styleMarkStack}>Graphql</span> as the query language.
                </p>
                <p className='text-[0.75rem] md:text-sm font-bold'>
                    Note: i am a progremmer 👩‍💻 (Profesional Google Reasearcher) 
                </p>
                <div className='flex gap-4 font-semibold'>
                    <Link href="">
                        <a className={styleButton} target="_black">
                            Download CV
                        </a>
                    </Link>
                    <Link href="https://github.com/siska199">
                        <a className={styleButton} target="_black">
                            View My Github
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default AboutMe