import React from 'react'

const AddComment = () => {
  return (
    <form className='flex flex-col w-ful gap-2'>
        <textarea className='l outline-none bg-transparent border-[0.005rem] border-cl700 dark:border-cd700 p-3' rows={2} placeholder="Add Comment">
        </textarea>
        <button className='bg-cl800 dark:bg-cd800 hover:bg-cl700 hover:dark:bg-cd700 w-[7rem] md:w-[10rem] py-2 text-[0.8rem] md:text-sm font-thin ml-auto'>Add Comment</button>
    </form>
  )
}

export default AddComment