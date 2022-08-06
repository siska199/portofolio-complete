import React from 'react'
import Link from 'next/link'
import {BsSuitHeart} from "react-icons/bs"
import {GoComment} from "react-icons/go"
import { useDispatch } from 'react-redux'
import { handleModalComments } from '../../redux/features/projectSlice'

const Project = ({data, active, prevElement}) => {
  const dispatch = useDispatch()
  const handleComments = ()=>{
    const html = document.querySelector('html')
    html.classList.add("overflow-y-hidden")
    dispatch(handleModalComments(true))
  }
  const styleButton = "font-semibold border-[0.005rem] border-cl700 dark:border-cd700 rounded-full w-auto px-2 md:px-3 py-1 text-sm md:text-base cursor-pointer bg-cl700 dark:bg-cd700 border-third hover:bg-transparent hover:dark:bg-transparent"
  return (
    <div className={`px-3 absolute top-0 items-center justify-center flex-col md:flex-row flex gap-[2rem] transition-all ease-in-out duration-1000 transform  ${prevElement?"-translate-x-full":"translate-x-0"} ${active?"translate-x-0":"translate-x-full "}`}>
      <div className='md:my-4  relative flex flex-col gap-5 '>
        <img src={data.imgApp} alt="" className='object-contain w-[20rem] shadow-md shadow-white'/>
        <div className='absolute left-[4.5rem] bottom-[-1rem] flex justify-center gap-3 '>
          {
            data.stacks.map((data,i)=>(
              <img key={i} src={data.image} className="w-8 h-8 object-contain" alt="" />
            ))
          }
        </div>
      </div>

      <div className='flex flex-col gap-2 md:gap-4 w-3/4'>
        <h1 className='text-[1.5rem] md:text-[2.1rem] font-bold text-four'>{data.tittle}</h1>
        <p className='text-justify font-thin md:font-semibold text-sm md:text-base '>{data.detailApp}</p>
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
        <div className='text-[0.7rem] md:text-base'>
          {
            data.stacks.map((data,i)=>(
              <div key={i}>
                ☑ {data.name}
              </div>
            ))
          }
        </div>
        <div className='flex gap-4 text-[1.5rem]'>
          <div className='font-thin flex flex-col  justify-center items-center'>
            <span className='cursor-pointer  bg-pink-600 hover:bg-transparent hover:border-[0.005rem] border-pink-400 rounded-full p-2'><BsSuitHeart /></span>
            <span className='text-sm font-bold '>1</span>
          </div>
          <div className='font-thin flex flex-col  justify-center items-center'>
            <span onClick={()=>handleComments()} className='cursor-pointer bg-green-600 hover:bg-transparent hover:border-[0.005rem] border-green-400   rounded-full p-2'><GoComment/></span>
            <span className='text-sm font-bold '>1</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Project