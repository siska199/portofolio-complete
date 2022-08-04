
import React from 'react'
import Section from '../layouts/Section'
import FAQ from "../atoms/FAQ"
import { dataFAQs } from '../../lib/data'

const FAQs= () => {
  return (
    <Section id="faqs">
      <div className='flex flex-col gap-[3rem] w-full px-3 md:w-[50rem] mx-auto'>
        <h1 className='header-section-menu'>FAQs ❔</h1>
        <div className='flex flex-col h-auto'>
          {
            dataFAQs.map((data,i)=>(
              <FAQ key={i} data={data} />
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default FAQs
