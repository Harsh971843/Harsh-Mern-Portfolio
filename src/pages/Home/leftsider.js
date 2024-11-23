import React from 'react';

function Leftsider() {
  return (
    <div className='sm:relative  sm:item-center sm:bottom-4 sm:left-0 fixed bottom-0 left-8 '>
      <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-center'>
        {/* <i className="ri-linkedin-box-fill text-white font-xl"></i> */}
        <a href="https://www.linkedin.com/in/harsh-verma-2b25561a2" target="_blank" rel="noopener noreferrer">
          <i className="ri-linkedin-box-fill text-white font-xl"></i>
        </a>
        <a href="https://github.com/Harsh971843" target="_blank" rel="noopener noreferrer">
        <i className="ri-github-fill text-white font-xl" ></i>
        </a>
        <a href="https://www.youtube.com/@harv27" target="_blank" rel="noopener noreferrer">
        <i className="ri-youtube-fill text-white font-xl"></i>
        </a>
        <a href="https://www.facebook.com/rahul.royy.5832" target="_blank" rel="noopener noreferrer">
        <i className="ri-facebook-circle-fill text-white font-xl"></i>
        </a>
        <a href="https://x.com/ManuRajput88001" target="_blank" rel="noopener noreferrer">
        <i className="ri-twitter-x-line text-white font-xl"></i>
        </a>
        <div className='w-[1px] h-40 bg-white sm:hidden'></div>
      </div>
    </div>
  );
}

export default Leftsider;
