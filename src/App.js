import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
import WorkList from './components/WorkList';
import WorkListHome from './components/WorkListHome';
import DetailJob from './components/DetailJob';
import { Helmet } from 'react-helmet';
import Login from './components/Login';
import { getToken } from "./cookie";
import { useEffect } from 'react';

const App = () => {
 
  useEffect(() => {
    const token = getToken();

    if (token) {
      console.log(`Token: ${token}`);
    }
  }, []);

 
  return (
    <>
     <Helmet>
        <title>JOBSKU - Temukan Pekerjaan Impianmu</title>
      </Helmet>

    <BrowserRouter>
    <GlobalProvider>

      <Navbar/>

      <Routes>

        <Route path='/' element={<WorkListHome/>} />

        <Route path='/lowongan' element={<WorkList/> }/>
        <Route path='/lowongan/:Id' element={<DetailJob/> }/>

        <Route path='/login' element={<Login/>} />

      </Routes>

      <Footer/>
    </GlobalProvider>
    </BrowserRouter>
        
    
    </>
  )

  
}

export default App
