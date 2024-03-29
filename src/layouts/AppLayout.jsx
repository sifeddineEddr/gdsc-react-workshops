import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function AppLayout() {
  return (
    <div className='flex flex-col h-screen '>
      <NavBar />
      <div className='flex-1 w-4/5 mx-auto'>
      <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default AppLayout;