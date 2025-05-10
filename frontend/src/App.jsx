import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Navbar} from './Components/Navbar'
import {Home, Menu} from './Components/MainBody'

function App() {
  const food = [
      { name: "biryani", value: 81 },
      { name: "burger", value: 87 },
      { name: "butter-chicken", value: 22 },
      { name: "dessert", value: 36 },
      { name: "dosa", value: 83 },
      { name: "idly", value: 77 },
      { name: "pasta", value: 34 },
      { name: "pizza", value: 95 },
      { name: "rice", value: 35 },
      { name: "samosa", value: 22 }
    ];
  
      let foodItems = [];
      let id=0;
      for (let index = 0; index <= 9; index++) {
          for (let j = 0; j < 20; j++) {
              foodItems.push({name: food[index].name +` variant ${Math.floor(Math.random()*100)}`, value: food[index].value +Math.floor(Math.random()*100), id: id++,imgLink: `https://foodish-api.com/images/${food[index].name}/${food[index].name}${j+1}.jpg`});
          }
      }
     console.log(foodItems);
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
