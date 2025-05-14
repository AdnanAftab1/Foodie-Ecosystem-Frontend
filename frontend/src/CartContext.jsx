import { createContext, use } from "react";
import { useState } from "react";
import {FoodList1} from "./assets/MenuList"

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    console.log(cart);

    const addToCart = (item) => {
    let index = cart.findIndex((i) => i.id === item.id);
    if(index === -1){
            setCart([...cart, {...item, quantity: 1}]);
    }else{
        const newCart = [...cart];
        newCart[index].quantity += 1;
        setCart(newCart);
    }
}

const removeFromCart = (item) => {
        const index = cart.findIndex((i) => i.id === item);
        if(index !== -1){
            const newCart = [...cart];
            newCart[index].quantity -= 1;
            if(newCart[index].quantity === 0){
                newCart.splice(index, 1);
            }
            setCart(newCart);
        }
    }
const RemoveAt= (index) => {
    setCart(prev => [...prev].filter((item,index1)=>{return index!=index1}));
}
const PresentInCart=(id)=>{
    const index=cart.findIndex((i) => i.id === id);
    return index==-1?0:cart[index].quantity;
}









const [Orders,SetOrders]=useState([{
    name:"Bharosa",
    amount:420,
    quantity:2,
    status:"Pata nhi"
}]);

const AddOrder=(item)=>{
    SetOrders(prev=>[...prev,item])
}
const ClearCart=()=>{
    setCart([]);
    setTotal(0);

}

const [FoodList,setMenu]=useState(FoodList1);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,RemoveAt,total, setTotal,PresentInCart,ClearCart ,Orders,AddOrder,FoodList,setMenu,SetOrders}}>
            {children}
        </CartContext.Provider>
    );
}