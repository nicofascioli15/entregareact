import React from 'react'
import Navbar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <header>
    	<Navbar  />
    </header>
    <main>
    	<Outlet/>
    </main>
	<footer>
		<Footer/>
	</footer>
    </>
  )
}

export default Home