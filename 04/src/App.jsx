import React from 'react';
import CompFooter from './CompFooter';
import CompHeader from './CompHeader';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CompHome from './CompHome';
import CompAbout from './CompAbout';
import CompPortfoilo from './CompPortfoilo';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <CompHeader/>
          <Routes>
            <Route path="/" element={<CompHome/>} />
            <Route path="about" element={<CompAbout/>} />
            <Route path="portfoilo" element={<CompPortfoilo/>} />
          </Routes>
        <CompFooter/>
      </BrowserRouter>
    </>
  );
};

export default App;
