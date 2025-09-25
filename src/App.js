import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from './Pages/Home'
const App = () => {
  // Add this for debugging (remove after fixing)
  console.log('Home import:', Home);

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;