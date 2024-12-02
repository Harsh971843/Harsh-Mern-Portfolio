import React from 'react';
import Header from '../../components/Header';
import Introduction from './Introduction';
import About from './About';
import Projects from './Projects';
import Footer from '../../components/Footer';
import Leftsider from './leftsider';
// import { useSelector } from 'react-redux';

function Home() {
  // const {portfoliodata} = useSelector((state) => state.root);
  return (
    <div className=''>
      <Header />
      <div className='bg-primary sm:bg-black px-40 sm:px-0'>
        <Introduction />
        <About />
        <Projects />
        <Leftsider />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
