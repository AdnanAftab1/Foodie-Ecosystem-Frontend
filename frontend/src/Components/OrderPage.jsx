import { useState,useContext } from "react";
import { CartContext } from "../CartContext";
import { FoodList } from "../assets/MenuList";
import { useNavigate } from "react-router";

export function OrderPage() {
    const {cart} = useContext(CartContext);
    const navigate=useNavigate();

    let total=0;
    return (
        <>
            <div className="shadow-lg rounded-lg p-4 m-10">
            <div className="grid grid-cols-6 font-[outfit] text-center text-lg border-b-2 border-gray-300 py-2">
                <div>Item</div>
                <div>Title</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Total</div>
                <div>Remove</div>
            </div>
                {
                    cart.map((item,index) => {
                        let i= FoodList.findIndex((food) => food.id === item.id);
                        total+=FoodList[i].price*item.quantity;
                        console.log(i);
                        if(!i) return null;
                        return <OrderedFood
                            key={item.id}
                            name={FoodList[i].name}
                            price={FoodList[i].price}
                            quantity={item.quantity}
                            image={FoodList[i].image}
                            index={index}
                        />
                    }
                )}
            </div>
            <CartTotal total={total} Button={() => {
                return (
                    <button className="bg-orange-400 text-white rounded-lg mt-4 active:bg-orange-500" onClick={()=>{navigate("/Checkout")}}>Check Out</button>
                )
            }}/>
        </>
    )

function OrderedFood({name,price,quantity,image,index}){
    const {RemoveAt} = useContext(CartContext);
    return (
    <div className="grid grid-cols-6 font-[outfit] text-center text-lg border-b-2 border-gray-300 py-2">
                <img className="h-10 place-self-center rounded-lg" src={image} />
                <div>{name}</div>
                <div>{quantity}</div>
                <div>${price}</div>
                <div>${price*quantity}</div>
                <button 
                className="place-self-center"
                onClick={() => {
                    
                    RemoveAt(index);
                }}
                ><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EA3323"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg></button>
            </div>
    )
}
}

export function CartTotal({total,Button}){
    const {setTotal} = useContext(CartContext);
    setTotal(total);
    return (
        <div className="m-10 inline-flex flex-col w-full max-w-96 h-min font-[outfit] shadow-lg rounded-lg p-4">
                <h1 className="border-b-2 text-xl font-semibold">Cart Total</h1>
                <div className="flex flex-row justify-between w-full text-lg">
                    <p >Cost</p>
                    <p >${total}</p>
                </div>
                <div className="flex flex-row justify-between w-full text-sm font-extralight">
                    <p >Delivery Charges </p>
                    <p >$5</p>
                </div>
                <div className="flex flex-row justify-between w-full text-lg font-semibold">
                    <p >Total</p>
                    <p >${total+5}</p>
                </div>
                {Button()}
            </div>
    )
}