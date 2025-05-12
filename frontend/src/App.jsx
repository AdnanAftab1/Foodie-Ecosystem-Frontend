import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Navbar} from './Components/Navbar'
import {Home, Menu} from './Components/MainBody'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <div>
      <Navbar />
      <div className='mx-[5%]'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </div>
  );
} 
export default App
