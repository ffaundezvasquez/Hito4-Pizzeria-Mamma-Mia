import React, {useState, useEffect} from "react";
import productos from '../src/assets/utils/pizzas.json'
import Navbar from './assets/components/Navbar/Navbar'
import Home from './assets/components/Home/Home'
import LoginPage from './assets/components/LoginPage/LoginPage'
import RegisterPage from './assets/components/RegisterPage/RegisterPage'
import Footer from './assets/components/Footer/Footer'
import Cart from './assets/components/Cart/Cart'
import Pizza from './assets/components/Pizza/Pizza'

function App() {
  return (
    <>
      <Navbar/>
      <Pizza/>
      {/* <Home productos={productos}/> */}
      {/* <LoginPage/> */}
      {/* <Cart productos={productos} /> */}
      {/* <RegisterPage/> */}
      <Footer/>
    </>
  )
}

export default App
