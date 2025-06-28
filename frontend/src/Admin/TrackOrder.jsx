import {useContext, useEffect} from "react";
import { CartContext } from "../CartContext";

export function TrackOrder(){
    const {Orders,LoadOrdersAsAdmin} =useContext(CartContext);
    useEffect(() => {
        LoadOrdersAsAdmin();
    },[])
            return (
                <div className={"w-full"}>
                    <div className="font-[outfit] w-full text-center text-3xl font-semibold m-3 underline">My Orders</div>

                    {
                        Orders.map((items,index)=>{
                            return (
                                    <OrderPlaced order={items} key={index} />
                            )
                        })
                    }
                </div>
    )
}

//
// function OrderPlaced({currentOrder,index}){
//     const {Orders,SetOrders}=useContext(CartContext);
//
//
//     return (
// <div className="border-b-2 text-sm border-collapse min-w-full grid grid-cols-5 items-center p-2 text-slate-700 transition-transform duration-300 " style={{
//         opacity: 0,
//         animation: "fadeIn 0.5s ease-in-out forwards",
//
//     }}>
//                 <p className="truncate">{currOD.userID}</p>
//                 <p className="truncate">{currOD.name}</p>
//                 <p className="truncate">{currOD.quantity}</p>
//                 <p className="truncate">{currOD.amount}</p>
//     <select className={"flex justify-center"} name={"status"} defaultValue={"Cancelled"} onChange={(event)=>{ChangeStatus(event.target.value,id)}}>
//         <option value={"Pending"}>Pending</option>
//         <option value={"Out for delivery"}>Out for delivery</option>
//         <option value={"Delivered"}>Delivered</option>
//         <option value={"Cancelled"}>Cancelled</option>
//     </select>
// </div>
//     )
// }
//
// function DropDown({title, children}) {
//     // Make dropdown-content absolutely positioned so it does not affect parent size
//     return (<div className="dropdown relative">
//   <button className=" p-0 w-full truncate bg-orange-400 p-2 text-white rounded flex flex-row items-center justify-center">{title} <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-360 280-560h400L480-360Z"/></svg></button>
//   <div className="dropdown-content absolute left-0 m-2 w-full bg-white rounded p-2 shadow-sm ml-0 mt-0 z-10">
//     {children}
//   </div>
// </div>)
// }


function OrderPlaced({order}){
    let total=0;
    const {ChangeStatus} =useContext(CartContext);
    return (

        <div className={"w-full m-2 mt-4 p-2 text-slate-500 italic bg-white rounded-lg shadow-md shadow-black/40"}>
            <div className={"font-semibold"}>Order ID:{order.id}</div>
            <div>Time of Order:{order.time_of_order}</div>
            <br/>
            <div className={"flex"}> Status:
                <select className={"flex justify-center mx-4 border-1 rounded-md p-1 "} name={"status"} defaultValue={order.status}
                        onChange={(event) => {
                            ChangeStatus(event.target.value, order.id)
                        }}
                    >
                    <option value={"Pending"}>Pending</option>
                    <option value={"Out for delivery"}>Out for delivery</option>
                    <option value={"Delivered"}>Delivered</option>
                    <option value={"Cancelled"}>Cancelled</option>
                </select>

            </div>
            <div className={"text-slate-900 text-xl underline w-full text-center"}>Items</div>

            <div className={"ml-10 mt-2"}>
                <div className={" grid  grid-cols-4 justify-between"}>
                    <p className="underline font-bold">Name</p>
                    <p className="underline  font-bold">Quantity</p>
                    <p className="underline  font-bold">Price </p>
                    <p className="underlinev font-bold">Total Cost</p>
                    {
                        order.items.map((item) => {
                            total+=item.total_amount;
                            return (
                                <>
                                    <p>{item.item_name}</p>
                                    <p>{item.quantity}</p>
                                    <p>{item.price}</p>
                                    <p>{item.total_amount}</p>
                                </>
                            )
                        })
                    }
                    <div className={"w-full border-b-1"}></div>
                    <div className={"w-full border-b-1"}></div>
                    <div className={"w-full border-b-1"}></div>
                    <div className={"w-full border-b-1"}></div>
                    <p></p>
                    <p></p>
                    <p className={"text-xl font-bold"}>Total:</p>
                    <p className={"text-xl font-bold"}>{total}</p>


                </div>
            </div>
        </div>
    )
};
