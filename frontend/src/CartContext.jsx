import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    console.log(cart);

    const addToCart = (item) => {
    let index = cart.findIndex((i) => i.id === item);
    if(index === -1){
            setCart([...cart, {id:item,quantity:1}]);
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

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,RemoveAt,total, setTotal,PresentInCart,setCart }}>
            {children}
        </CartContext.Provider>
    );
}