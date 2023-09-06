import React from 'react'
import { COMMENT } from '../Utils/constants'

const Comments = ({comments}) => {
  const {imagesrc, name, comment} = comments;
  return (
    <>
    <div className='flex items-center gap-2'>
      <img
        className="rounded-full h-10 w-auto mr-2"
        src={imagesrc}
        alt={name}
      />
      <div className='flex flex-col'>
        <span className='text-base text-slate-900 font-semibold'>{name}</span>
        <span>{comment}</span>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Comments