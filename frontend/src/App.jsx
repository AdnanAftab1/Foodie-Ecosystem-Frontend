import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Navbar} from './Components/Navbar'
import {Home, Menu} from './Components/MainBody'

function App() {

  return (
    <div>
      <Navbar />
      <div className='mx-[5%]'>
      <Home/>
      <br/>
      <Menu/>
      </div>
      </div>
  );
}

export default App
