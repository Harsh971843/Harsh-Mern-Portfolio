import React from 'react'

function Sectiontitle( {title ,}) {
  return (
    <div className='flex gap-10 sm:py-2 sm:justify-center  items-center'>
    <h1 className='text-3xl text-white sm:text-yellow-200 sm:text-4xl sm:font-semibold'>{title}</h1>

    </div>
  )
}

export default Sectiontitle;
