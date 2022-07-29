import React from 'react'
import {MdVerified} from 'react-icons/md'
import Section from '../layouts/Section'
import {forntendSkills, backendSkills} from "../../lib/data"
import CardSkill from '../atoms/CardSkill'

const MySkills = () => {
    const styleCard = "w-1/2 flex flex-wrap py-3 px-5 bg-slate-700"
  return (
    <Section>
        <div className='flex flex-col w-3/4 gap-[3rem] justify-center'>
            <header className='text-center text-[3rem] font-bold'>My Skills </header>
            <div className='flex gap-[3rem] justify-center'>
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