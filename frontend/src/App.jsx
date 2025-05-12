import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Navbar} from './Components/Navbar'
import {Home} from './Components/Home'
import {OrderPage} from './Components/OrderPage'
import { Route, Routes } from 'react-router'
import { SignUp,Login } from './Components/Verifiers'
import { CheckoutPage } from './Components/CheckoutPage'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className='Central_Default mx-[5%]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
      </div>
  );
} 
export default App
