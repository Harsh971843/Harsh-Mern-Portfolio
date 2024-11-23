import React from 'react';
// import {logo} from 'E:/Harsh_Portfolio/harshportfolio/src/files/logo.png';

function Footer() {
    return (
        <div className='bg-primary sm:bg-black py-1'>
            <div className='flex flex-col justify-center'>
                <div>
                    <h1 className='text-xl font-semibold text-white sm:text-xs'>Designed and Developed by <br />Harsh</h1>
                </div>
                <div>
                    {/* <img src={logo} href="#" alt="logo" /> */}
                </div>    
            </div>
        </div>
    );
}

export default Footer;
