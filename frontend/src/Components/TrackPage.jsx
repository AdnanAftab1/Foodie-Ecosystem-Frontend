import { useContext } from "react";
import { CartContext } from "../CartContext";

export function TrackPage(){
    const {Orders} =useContext(CartContext);
    return (
        <div className="w-full text-center">
            <div className="font-[outfit] text-3xl font-semibold m-3 underline">My Orders</div>
            <div className="inline-grid items-center p-3 m-2 w-full text-lg max-md:text-md rounded overflow-scroll ">
                <div className="border-b-2 w-full grid grid-cols-6 h-10 justify-baseline content-end bg-slate-200 text-sm font-semibold">
                <p>Admin ID</p>
                <p>Name</p>
                <p>Quantity</p>
                <p>Amount</p>
                <p>Status</p>
                <p></p>
                </div>
            {
                Orders.map((items)=>{
                    return (
                        <OrderPlaced name={items.name} quantity={items.quantity} amount={items.amount} status={items.status} adminID={items.AdminID} />
                    )
                })
            }
            </div>
        </div>
    )
}


function OrderPlaced({name,quantity,amount,status,adminID}){
    return (

        <div className="border-b-2 text-sm border-collapse w-full grid grid-cols-6 max-sm:grid-cols-5 p-2 text-slate-700 transition-transform duration-300" style={{
        opacity: 0,
        animation: "fadeIn 0.5s ease-in-out forwards",
    }}>
                <p>{adminID}</p>                
                <p>{name}</p>   
                <p>{quantity}</p>
                <p>{amount}</p>
                <p>{status}</p>
                
                <button className="text-white rounded font-semibold bg-orange-400 p-1 hover:bg-amber-600 active:bg-amber-700">Track Order</button>
        </div>
    )
}