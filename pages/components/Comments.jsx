import React from 'react'
import Modal from '../layouts/Modal'
import AddComment from "../atoms/AddComment"
import Comment from "../atoms/Comment"
import { dataCommentById } from '../../lib/data'

const Comments = () => {
  return (
    <Modal type="comments" showModal={true}>
        <div onClick={(e)=>e.stopPropagation()} className='w-[90%] lg:w-[60rem] min-h-full bg-cl900 dark:bg-cd900 p-5'>
          <h1 className='text-center font-bold text-[2rem] md:text-[3rem]'>{dataCommentById.title}</h1>
          <div className='w-[90%] mx-auto justify-center items-center mt-[3rem] '>
            <AddComment/>
            <div className='flex flex-col mt-5 gap-3 max-h-[20rem] overflow-y-scroll'>
              {
                dataCommentById.comments.map((data,i)=>(
                  <Comment data={data} key={i}/>
                ))
              }
            </div>
          </div>
        </div>
    </Modal>
  )
}

export default Comments