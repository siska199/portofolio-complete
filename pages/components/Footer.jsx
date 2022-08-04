import React from 'react'
import Section from "../layouts/Section"

const Footer = () => {
  return (
      <Section>
        <div className='bg-black w-full py-2 text-center font-thin'>
          <p>
          © Siska Apriana Rifianti
          </p>
          <div className='my-3'>
            <h1 className='font-bold'>🌞My Quotes🌞</h1>
            <p className='text-sm text-gray-400 px-3'>
              Menjadi seorang junior developer, bukan berasal dari jurusan IT dan seorang perempuan tidak berarti harus diremehkan, 
              saya sadar ilmu saya sebagai seorang yang baru berkecimpung di dunia IT tidak se sebanyaak mereka yang sudah lama di dunia ini,
              tapi saya mau untuk mengejar ketertinngalan saya dan membuat saya sejajar dengan mereka para senior huhuhu ^_^
              <br/>
              <span className='font-bold'>
                Junior---Senior---Team Lead---CTO 
              </span>
              <br/>
              "yok bisa yok"
            </p>
          </div>
        </div>
      </Section>

  )
}

export default Footer