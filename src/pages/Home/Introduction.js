import React from 'react'
import { useSelector } from 'react-redux';

function Introduction() {
  const {portfoliodata} = useSelector((state) => state.root);
  const {intro} =portfoliodata;
  const {firstname,profession,description} = intro;
  return (
    <div className='h-[80vh] flex flex-col sm:bg-black bg-primary items-start justify-center gap-9  py-10 sm:flex-wrap sm:items-center sm:pt-0 sm:gap-5 sm:px-3'>
    <h1 className='text-white sm:text-xl'>Hello , I am </h1>
    <h1 className='text-5xl text-tertiary font-semibold sm:text-3xl'>{firstname || ''} - {profession || ''}</h1>
    <p className='text-white sm:flex-wrap sm:text-xl sm:pb-6'>{description || ''}</p>
    <button className=' border-2 border-secondary text-secondary px-5 py-1 sm:py-2 rounded'>Explore</button>
    </div>
  )
}

export default Introduction
