import React from 'react'
import Sectiontitle from '../../components/Sectiontitle';
import myGif from 'E:/Harsh_Portfolio/harshportfolio/src/files/dev.gif';
import { useSelector } from 'react-redux';

function About() {
  const {portfoliodata} = useSelector((state) => state.root);
  const {about} = portfoliodata;
  const{description,skills} = about;
  // const skills= ["HTML","CSS","JAVASCRIPT","REACTJS","NODEJS","MONGODB","MYSQL","JAVA","PYTHON"];
  return (
    <div>
     <Sectiontitle title = "About"/>
     <div className="flex w-full items-center py-20 sm:flex-wrap sm:py-2 sm:justify-center "  >
       <div className='h-[20vh] sm:justify-center w-2/3'>
        <img src={myGif} alt="Animation" />
       </div>
       <div className='flex flex-col gap-5'>
        <p className='text-white sm:text-xl'>{description || ''}</p>
        {/* <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga dolorum a rec Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maiores architecto amet optio corporis odio eligendi, aperiam voluptatum veniam officiis!</p> */}
       </div>  
      </div> 
      <div className='py-1 flex flex-col sm:py-20'>
         <h1 className='text-secondary text-2xl sm:text-xl' >
             Technologies used by myself to develope :
          </h1>
          <div className='flex flex-wrap gap-2 py-4 px-3 sm:justify-center sm:flex-row '>
          {skills.map((skills,index)=> (
            <div className='text-secondary border-2 border-secondary rounded py-1 px-4'>
                <p>{skills || ''}</p>
            </div>
          ))};
          </div>
      </div>
    </div>
  )
}

export default About;
