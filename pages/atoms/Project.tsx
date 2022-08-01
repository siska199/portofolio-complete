import React from 'react'
import Link from 'next/link'

const Project = ({data, active, prevElement}) => {

  const styleButton = "font-semibold border-[0.005rem] border-gray rounded-full w-auto px-3 py-1 cursor-pointer bg-slate-700 border-slate-700 hover:bg-transparent"
  return (
    <div className={`px-3 absolute top-0 items-center justify-center flex-col md:flex-row flex gap-[2rem] transition-all ease-in-out duration-1000 transform  ${prevElement?"-translate-x-full":"translate-x-0"} ${active?"translate-x-0":"translate-x-full "}`}>
      <div className='my-4  relative flex flex-col gap-5 '>
        <img src={data.imgApp} alt="" className='object-contain  w-[20rem] shadow-md shadow-white'  />
        <div className='absolute left-14 bottom-[-1rem] flex justify-center gap-3 '>
          {
            data.stacks.map((data,i)=>(
              <img key={i} src={data.image} className="w-8 h-8 object-contain" alt="" />
            ))
          }
        </div>
      </div>

      <div className=' flex flex-col gap-4 w-3/4'>
        <h1 className='text-[2.1rem] font-bold text-slate-600'>{data.tittle}</h1>
        <p className='text-justify font-semibold text-slate-300'>{data.detailApp}</p>
        <div className='flex space-x-3'>
          <Link href={data.linkGithub}>
            <a className={styleButton} target="_blank">
              📂 Github Repo
            </a>
          </Link>
          <Link href={data.linkDemo}>
            <a className={styleButton} target="_blank">
              View Demo
            </a>
          </Link>
        </div>
        <div className=''>
          {
            data.stacks.map((data,i)=>(
              <div key={i}>
                ☑ {data.name}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Project