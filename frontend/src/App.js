import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './Admin/pages/DashBoard';
import './App.css';
import MainNavigation from './Shared/Components/Navigation/MainNavigation';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <MainNavigation />
        <Routes>
          <Route path='/admin' element={<DashBoard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;