import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import { useEffect } from 'react';
// import axios from 'axios';

// Define the function outside the component
// const fetchPortfolioData = async () => {
//   try {
//     const response = await axios.get('portfolio/portfolio-data');
//     dispatch(GetPortfolioData(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// };

function App() {
  // const {portfoliodata} = useSelector((state) => state.root);
  // const dispatch = useDispatch();
  // const fetchPortfolioData = async () => {
  //   try {
  //     const response = await axios.get('portfolio/portfolio-data');
  //     dispatch(GetPortfolioData(response.data));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  

  // useEffect(() => {
  //   fetchPortfolioData();
  // }, []);
  // useDispatch(() =>{
  //   console.log(portfoliodata);
  // },[portfoliodata]);

  return (
    <div className="App">
      <HashRouter basename="Harsh-Mern-Portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Admin" element={<Admin />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
