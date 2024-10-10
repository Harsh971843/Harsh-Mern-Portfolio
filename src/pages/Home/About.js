import React from 'react'
import Sectiontitle from '../../components/Sectiontitle';
import myGif from 'E:/Harsh_Portfolio/harshportfolio/src/files/dev.gif';

function About() {
  const skills= ["HTML","CSS","JAVASCRIPT","REACTJS","NODEJS","MONGODB","MYSQL","JAVA","PYTHON"];
  return (
    <div>
     <Sectiontitle title = "About"/>
     <div className="flex w-full items-center py-40"  >
       <div className='h-[20vh] w-2/3'>
        <img src={myGif} alt="Animation" />
       </div>
       <div className='flex flex-col gap-5'>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga dolorum a recusandae quos sequi aspernatur consequatur et saepe? Sint reprehenderit totam minima fugiat ipsam animi recusandae molestias veniam culpa!</p>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga dolorum a rec Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maiores architecto amet optio corporis odio eligendi, aperiam voluptatum veniam officiis!</p>
       </div>  
      </div> 
      <div className='py-1 flex flex-col'>
         <h1 className='text-secondary text-2xl ' >
             Technologies used by myself to develope :
          </h1>
          <div className='flex flex-wrap gap-4 py-2'>
          {skills.map((skills,index)=> (
            <div className='text-secondary border-2 border-secondary rounded py-1 px-4'>
                <p>{skills}</p>
            </div>
          ))};
          </div>
      </div>
    </div>
  )
}

export default About;
