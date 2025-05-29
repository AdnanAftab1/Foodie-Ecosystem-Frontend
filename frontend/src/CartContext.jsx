/* eslint-disable no-unused-vars */
import { createContext, useEffect, useRef, } from "react";
import {useState} from "react";
import {FoodList1} from "./assets/MenuList"
import axios from "axios";
import {commonjs} from "globals";
export const CartContext = createContext(null);
const LinkBasis='http://13.234.231.241:8000';
export const CartProvider = ({ children }) => {
    const [userID,setUserID]=useState("");
    const [accessToken,setaccessToken]=useState("");
    const [token_type,settoken_type]=useState("");
    const [ver,setver]=useState(false);
    const [alert,setAlert]=useState(true);
    const alertMessage=useRef("");
    
    function Alert(alertMess){
        alertMessage.current=alertMess;
        setAlert(prev=>!prev);
        setTimeout(() => {
            setAlert(prev => !prev);
        }, 1000);
    }



    const SignUpFunc=(name,email,password)=>{
        const user_type=location.pathname.substring(1)==="admin"?"admin":"user";
        axios.post(`${LinkBasis}/user/signUp`,
            {
                        email,
                        password,
                        name,
                        user_type
        }
        ).then((response)=>{console.log(response.data);setUserID(response.data.id);setver(!ver)}).catch(()=>{Alert("Something went wrong")});
    }

    const LoginFunc=(username,password)=>{
        const newForm=new URLSearchParams();
        newForm.append("username",username);
        newForm.append("password",password);
        newForm.append("grant_type","password");
        axios.post(`http://13.234.231.241:8000/user/login`,newForm,{
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }
        ).then((response)=>{console.log(response.data);settoken_type(response.data.token_type);setaccessToken(response.data.access_token);setver(!ver)}).catch(()=>{Alert("Something went wrong")});
    }


    const [total, setTotal] = useState(0);
    const [adminList,setList]=useState([]);


    const [options,setOptions]=useState([

     // {
     //    name: "burger",
     //    FirstPic: `https://foodish-api.com/images/burger/burger1.jpg`
     // },
     // {
     //    name: "butter-chicken",
     //    FirstPic: `https://foodish-api.com/images/butter-chicken/butter-chicken1.jpg`
     // },
     // {
     //    name: "dessert",
     //    FirstPic: `https://foodish-api.com/images/dessert/dessert1.jpg`
     // },
     // {
     //    name: "dosa",
     //    FirstPic: `https://foodish-api.com/images/dosa/dosa1.jpg`
     // },
     // {
     //    name: "idly",
     //    FirstPic: `https://foodish-api.com/images/idly/idly1.jpg`
     // },
     // {
     //    name: "pasta",
     //    FirstPic: `https://foodish-api.com/images/pasta/pasta1.jpg`
     // },
     // {
     //    name: "pizza",
     //    FirstPic: `https://foodish-api.com/images/pizza/pizza1.jpg`
     // },
     // {
     //    name: "rice",
     //    FirstPic: `https://foodish-api.com/images/rice/rice1.jpg`
     // },
     // {
     //    name: "samosa",
     //    FirstPic: `https://foodish-api.com/images/samosa/samosa1.jpg`
     // },
    ])

    useEffect( ()=>{
        if(accessToken && token_type){
            axios.get(`	http://13.234.231.241:8000/category/viewAllCategories`,{
                headers: {
                    Authorization: `${token_type} ${accessToken}`,
                    Accept: "application/json"
                }
            })
                .then((response) => {
                    console.log("Data:", response.data);
                    setOptions([{
                        id:"0",
                        category_name: "Top Rated",
                        image_url: `https://cdn-icons-png.flaticon.com/512/1486/1486474.png`
                    },... response.data]);
                })
                .catch((error) => {
                    console.error("Error fetching items:", error);
                });
        }
    },[accessToken])

    const addOptions=(item)=>{
    setOptions([...options,item])
}



    const [cart, setCart] = useState([]);


    const addToCart = (id) => {
        axios.post(`http://13.234.231.241:8000/cart/addToCart/${id}`,{},{
            headers: {
                Authorization: `${token_type} ${accessToken}`,
                Accept: "application/json"
            }
        }).catch((err)=> {
            Alert("Can't Add");
            console.log(err);
        });

}

    const removeFromCart = (id) => {
        axios.delete(`http://13.234.231.241:8000/cart/removeItemFromCart/${id}`,{
            headers: {
                Authorization: `${token_type} ${accessToken}`,
                Accept: "application/json"
            }
        }).catch((err)=> {
            Alert("Can't Remove");
            console.log(err);
        })
    }


    const RemoveAt= (index) => {
        setCart(prev => [...prev].filter((item,index1)=>{return index!=index1}));
    }
    // const PresentInCart=(id)=>{
    //     const index=cart.findIndex((i) => i.id === id);
    //     return index==-1?0:cart[index].quantity;
    // }

const AddAdmin = (id) => {
    setList(prev => {
        if (prev.includes(id)) return prev;
        return [...prev, id];
    });
}

const RemoveItem=(item_id)=>{
        setMenu(FoodList.filter((item)=>{return item.id!==item_id}))
        axios.delete(`http://13.234.231.241:8000/item/deleteItem/${item_id}`,{
            headers: {
                Authorization: `${token_type} ${accessToken}`,
                Accept: "application/json"
            }
        })
}

//List of Orders is here with syntax
const [Orders,SetOrders]=useState([]);

const AddOrder=(items)=>{
    SetOrders(prev=>[...prev,...items])
}
const ClearCart=()=>{
    setCart([]);
    setTotal(0);
}

//List of All Items is here....
const [FoodList,setMenu]=useState([]);

useEffect(() => {
    if (accessToken && token_type) {
        console.log("Fetching items with token:", { accessToken, token_type });

        axios.get(`	http://13.234.231.241:8000/item/viewAllItems`, {
            headers: {
                Authorization: `${token_type} ${accessToken}`,
                Accept: "application/json"
            }
        })
        .then((response) => {
            console.log("Data:", response.data);
            setMenu(response.data);
        })
        .catch((error) => {
            console.error("Error fetching items:", error);
        });
    }
}, [accessToken, token_type]);

const addItem=(item)=>{
    axios.post(`http://13.234.231.241:8000/item/addItem`,{
        item_name: item.item_name,
        rating: item.rating,
        cost: item.cost,
        category_id: item.category_id,
        item_description: item.item_description,
        image_url: item.image_url
    }, {
        headers: {
            Authorization: `${token_type} ${accessToken}`,
            Accept: "application/json"
        }
    }).then(()=>setMenu([...FoodList,item]))
}

const LogOutFunc=()=>{
    settoken_type("");
    setaccessToken("");
    setver(false);
}



//Category Create,Add,View All
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,
        RemoveAt,
        total, setTotal,ClearCart ,
        Orders,AddOrder,
        FoodList,setMenu,RemoveItem,addItem,
        SetOrders,
        adminList,AddAdmin,
        options,addOptions,
        ver,
        alert,alertMessage,
        SignUpFunc,LoginFunc, LogOutFunc}}>
            {children}
        </CartContext.Provider>
    );
}
