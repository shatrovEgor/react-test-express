import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import TestPage from './pages/TestPage'
import './styles/App.css'

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='test' element={<TestPage/>}/>
          <Route path='*' element={<MainPage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
