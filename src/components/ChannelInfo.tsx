import React from 'react'
import Comments from './Comments'

const ChannelInfo = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-3'>
        <img  alt='channelName' className='w-8 h-8 rounded-full bg-slate-400' src='https://tailwindcss.com/_next/static/media/frontendben.7c4b54bd.jpg'/>
        <div>
        <div className='flex flex-col'>
          <span className='text-base text-slate-900 font-semibold dark:text-slate-300'>Channel name</span>
          <span>305k Subscribers</span>
        </div>
        </div>
        <button className='px-4 py-2 font-semibold text-sm rounded-full bg-black text-white hover:bg-slate-700'>subscribe</button>
      </div>
      <div className='flex gap-2'>
      <button className='px-4 py-2 font-semibold text-sm rounded-full bg-black text-white hover:bg-slate-700'>like</button>
      <button className='px-4 py-2 font-semibold text-sm rounded-full bg-black text-white hover:bg-slate-700'>share</button>
      <button className='px-4 py-2 font-semibold text-sm rounded-full bg-black text-white hover:bg-slate-700'>download</button>
      </div>
    </div>
  )
}

export default ChannelInfo