import { useContext } from "react";
import { CartContext } from "../CartContext";

export function TrackOrder(){
    const {Orders} =useContext(CartContext);
            return (
                <div className="w-full text-center h-full">
                    <div className="font-[outfit] text-3xl font-semibold m-3 underline">My Orders</div>
                    <div className="inline-grid items-center p-3 m-2 w-full text-lg max-md:text-md rounded ">
                        <div className="border-b-2 w-full grid grid-cols-5 h-10 justify-baseline content-end bg-slate-200 text-sm font-semibold">
                        <p>User ID</p>
                        <p>Name</p>
                        <p>Quantity</p>
                        <p>Amount</p>
                        <p >Status</p>
                        </div>
                    {
                        Orders.map((items,index)=>{
                            return (
                                    <OrderPlaced currOD={items} index={index} />
                            )
                        })
                    }
                    </div>  
                </div>
    )
}


function OrderPlaced({currOD,index}){
    const {Orders,SetOrders}=useContext(CartContext);
    const NewOrders=Orders.filter((item,ind)=>{
        return index!=ind;
    })
    return (
<div className="border-b-2 text-sm border-collapse min-w-full grid grid-cols-5 items-center p-2 text-slate-700 transition-transform duration-300 " style={{
        opacity: 0,
        animation: "fadeIn 0.5s ease-in-out forwards",

    }}>     
                <p className="truncate">{currOD.userID}</p>
                <p className="truncate">{currOD.name}</p>
                <p className="truncate">{currOD.quantity}</p>
                <p className="truncate">{currOD.amount}</p>
                <DropDown title={currOD.status}>
                    <button type="button" key={index} onClick={()=>{SetOrders([...NewOrders,{...currOD,status:"Order Recieved"}]
                        )}} className=" bg-white w-full inset-shadow-slate-500/40 hover:inset-shadow-slate-700/70 inset-shadow-sm ">Order Recieved</button>
                         <button type="button" key={index} onClick={()=>{SetOrders([...NewOrders,{...currOD,status:"Out for Delivery"}]
                        )}} className=" m-1 bg-white w-full inset-shadow-slate-500/40 hover:inset-shadow-slate-700/70 inset-shadow-sm ">Out for Delivery</button>
                         <button type="button" key={index} onClick={()=>{SetOrders([...NewOrders,{...currOD,status:"Delivered"}]
                        )}} className=" m-1 bg-white w-full inset-shadow-slate-500/40 hover:inset-shadow-slate-700/70 inset-shadow-sm ">Delivered</button>
                        <button type="button" key={index} onClick={()=>{SetOrders([...NewOrders,{...currOD,status:"Cancelled"}]
                        )}} className="Central_Default m-1 bg-white w-full inset-shadow-slate-500/40 hover:inset-shadow-slate-700/70 inset-shadow-sm ">Cancelled</button>
                </DropDown>
            </div>
    )
}

function DropDown({title,children}) {
    // Make dropdown-content absolutely positioned so it does not affect parent size
    return (<div className="dropdown relative">
  <button className=" p-0 w-full truncate bg-orange-400 p-2 text-white rounded flex flex-row items-center justify-center">{title} <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-360 280-560h400L480-360Z"/></svg></button>
  <div className="dropdown-content absolute left-0 m-2 w-full bg-white rounded p-2 shadow-sm ml-0 mt-0 z-10">
    {children}
  </div>
</div>)
}