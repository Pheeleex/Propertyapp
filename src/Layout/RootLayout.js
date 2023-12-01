import React from 'react'
import NavBar from '../Components/Pages/NavBar'
import Footer from '../Components/Pages/Footer'
import Outro from "../Components/Pages/Outro"
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div className='root-layout'>
        <NavBar />
            <main>
                <Outlet />
            </main>
            <Outro />
        <Footer />
    </div>
  )
}

export default RootLayout