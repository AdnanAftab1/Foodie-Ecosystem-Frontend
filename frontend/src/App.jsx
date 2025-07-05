
import {Navbar} from './Components/Navbar'
import {Home} from './Components/Home'
import {OrderPage} from './Components/OrderPage'
import { Route, Routes } from 'react-router'
import { CheckoutPage } from './Components/CheckoutPage'
import { TrackPage} from './Components/TrackPage'
import {Admin} from './Admin/Admin'
import {loadStripe} from '@stripe/stripe-js';
import { useState,useEffect, useContext } from 'react'
import Payment from './Components/Payment/Payment'
import Completion from './Components/Payment/Completion'
import { CartContext } from './CartContext'
function App() {
  const [ stripePromise, setStripePromise ] = useState(null);
  const {token_type,accessToken}=useContext(CartContext)
  useEffect(() => {   
    fetch("https://foodie.backendpro.icu/stripe/config",{
      method:"GET",
      headers:{
        Authorization: `${token_type} ${accessToken}`,
                    Accept: "application/json"
      }
    }).then(async (r) => {
      console.log("Check");
      const { publishableKey } = await r.json();
      console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, [accessToken]);
  return (
    <div>
      <Navbar/>
      <div className='Central_Default relative mx-[5%]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/trackOrders" element={<TrackPage/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/pay" element={<Payment stripePromise={stripePromise} />} />
          <Route path="/completion" element={<Completion stripePromise={stripePromise} />} />
        </Routes>
      </div>
      <AboutUs/>
      </div>
  );
} 

export function AboutUs() {
    return (
            <footer className=" Central_Default w-screen overflow-visible bottom-0">
                <img
                    className="object-cover w-screen h-full"
                    src="https://lekvilla.com/wp-content/uploads/2015/07/BACKGROUND-FOOTER-1.jpg"
                    alt="Food"
                />
                <div className="absolute w-full grid grid-cols-2 text-center text-white font-[outfit]  font-semibold">
                    <div>Contact Us</div>
                    <div>Sponsors</div>
                    <div>Mobile App</div>
                    <div>Founders</div>
                    <div>Our Achievements</div>
                    <p>Our Team</p>
                </div>
            </footer>
    );
}
export default App
