import React, { useState } from 'react'
import {CgPlayTrackPrev} from "react-icons/cg"
import {ImNext2} from "react-icons/im"
import Section from '../layouts/Section'
import {projectSkills as dataProjects} from "../../lib/data"
import Project from '../atoms/Project'

const MyProjects = () => {
    const styleButtonSlider = "absolute top-[50%] text-[3rem] !text-white z-[10]"
    const [indexData, setIndexData] = useState(0)
    const handlePrevButton = ()=>{
        setIndexData(prev=>(prev-1))

    }
    const handleNextButton = ()=>{
        setIndexData(prev=>(prev+1))
    }
  return (
    <Section id="my-projects">
        {
            indexData>0&&(
                <button onClick={()=>handlePrevButton()} className={`${styleButtonSlider} left-0`}>
                    <CgPlayTrackPrev color="white"/>
                </button>
            )
        }
        <div className='flex flex-col  w-full gap-[5rem] md:px-[5rem]'>
            <header className='text-center text-[3rem] font-bold'>&#128151; My Projects &#128151;</header>
            <div className='relative min-h-[70vh] scrollbar-hidden  w-full overflow-x-hidden'>
                {
                    dataProjects.map((data,i)=>(
                        <Project key={i} data={data} active={i==indexData?true:false} prevElement={i<indexData?true:false}  />
                    ))
                }
            </div>
        </div>
        {
            indexData<dataProjects.length-1 &&(                
                <button onClick={()=>handleNextButton()} className={`${styleButtonSlider} right-0`}>
                    <ImNext2 color="white"/>
                </button>
            )
        }
    </Section>
  )
}

export default MyProjects