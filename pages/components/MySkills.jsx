import React from 'react'
import Section from '../layouts/Section'
import {forntendSkills, backendSkills} from "../../lib/data"
import CardSkill from '../atoms/CardSkill'

const MySkills = () => {
    const styleCard = `w-3/4 md:w-1/2 flex flex-wrap p-3 md:py-3 md:px-5 bg-clCard dark:bg-cdCard`
  return (
    <Section id="my-skills">
        <div className=' flex flex-col md:w-3/4 gap-[3rem] justify-center px-3 md-px-0'>
            <header className='header-section-menu'>My Skills 💸</header>
            <div className='flex flex-wrap md:flex-nowrap gap-[3rem] md:gap-[3rem] justify-center '>
                <section className={styleCard}>
                    {
                        forntendSkills.map((data,i)=>(
                            <CardSkill data={data} key={i}/>
                        ))
                    }
                </section>
                <section className={styleCard}>
                    {
                        backendSkills.map((data,i)=>(
                            <CardSkill  data={data} key={i}/>
                        ))
                    }
                </section>
            </div>
        </div>
    </Section>
  )
}

export default MySkills