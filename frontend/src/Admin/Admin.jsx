import { CartContext } from "../CartContext";
import { useState } from "react";
import { ListItem } from "./ListItem";
import { AddItem } from "./AddItem";
import { TrackOrder } from "./TrackOrder";
import { DropDown } from "./AddItem";
 
export function Admin() {
    const [currOp,setcurrOp]=useState("List-Items");
    const [show,setShow]=useState(false);

    return(
        <div className="flex flex-col w-full items-center">
        <div className="grid grid-cols-3 z-20  left-5 top-5 shadow-sm w-full mb-4 justify-items-center">
        <div onClick={()=>{setcurrOp("Add Item")}} className={"w-full p-1 mx-3 flex justify-center  " +(currOp=="Add Item"?"bg-amber-500 text-white shadow-md  shadow-amber-500":"")}>Add Item</div>
        <div onClick={()=>{setcurrOp("List-Items")}} className={"w-full p-1 mx-3   flex justify-center  " +(currOp=="List-Items"?"bg-amber-500 text-white shadow-md  shadow-amber-500":"")}>List-Items</div>
        <div onClick={()=>{setcurrOp("Track Orders")}} className={"w-full p-1 mx-3 flex justify-center  " +(currOp=="Track Orders"?"bg-amber-500 text-white shadow-md  shadow-amber-500":"")}>Track Orders</div>

        </div>
            {
                (currOp=="Add Item")?<AddItem setter={()=>{setcurrOp("List-Items")}}/>:((currOp=="List-Items")?<ListItem/>:<TrackOrder/>)
            }
        </div>
    )
}

