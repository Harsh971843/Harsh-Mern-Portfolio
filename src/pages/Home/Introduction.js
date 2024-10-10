import React from 'react'

function Introduction() {
  return (
    <div className='h-[80vh] flex flex-col bg-primary items-start justify-center gap-8 w-2/3 py -10'>
    <h1 className='text-white'>Hello , I am </h1>
    <h1 className='text-6xl text-tertiary font-semibold'>Harsh - Web Developer</h1>
    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam saepe provident illum cupiditate rem quibusdam distinctio sequi! Nam quam asperiores accusamus eligendi neque? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi amet architecto iure ipsam atque, officiis facilis cupiditate explicabo, et obcaecati reprehenderit ut exercitationem.</p>
    <button className='border-2 border-secondary text-secondary px-5 py-1 rounded'>Explore</button>
    </div>
  )
}

export default Introduction
