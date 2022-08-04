import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
import Section from '../layouts/Section'
import CardLearning from "../atoms/CardLearning"
import { learningJourneys } from '../../lib/data'
import Link from 'next/link'

const MyLearningJourney = () => {
  return (
    <Section id="my-learning-journey">
      <div className='flex w-full flex-col gap-[3rem] '>
          <h1 className='header-section-menu '>
            My Learning Journey &#128220;
          </h1>
          <div className='relative flex flex-col'>
            <p className='absolute -top-[2rem] font-bold right-0 z-[50] text-end px-3'></p>
            <div className='px-3 flex w-full overflow-x-scroll gap-4 scrollbar-hidden'>
              {
                learningJourneys.map((data,i)=>(
                  <CardLearning data={data}/>
                ))
              }            
            </div>
            <Link href="https://www.linkedin.com/in/siska-apriana-rifianti/">
              <a target="_blank" className='border-gray-600 mx-auto my-5 gap-3 text-sm md:text-base hover:border-[0.005rem] px-3 py-1 font-bold flex items-center'><AiFillLinkedin className='text-[1.3rem]'/> View my linkind</a>
            </Link>
          </div>
      </div>
    </Section>
  )
}

export default MyLearningJourney