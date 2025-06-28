import {useContext, useState ,useRef } from "react";
import "../App.css";
import { CartContext } from "../CartContext";


export function SignUp({sethis}) {
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const {SignUpFunc}=useContext(CartContext)
    
    return (
        <div className="Central_Default w-min font-[outfit] bg-white border-2 border-gray-300 shadow-lg rounded-lg p-5 " style={{
        opacity: 0,
        animation: "fadeIn 0.5s ease-in-out forwards"
    }} >
            <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
            <form className="flex flex-col space-y-4">
                <input type="text" ref={name} placeholder="Username" className="p-2 border rounded"/>
                <input type="email" ref={email} placeholder="Email" className="p-2 border rounded"/>
                <input type="password" ref={password} placeholder="Password" className="p-2 border rounded"/>
                <button type="button" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 active:bg-blue-800" onClick={()=>{console.log(name.current.value,email.current.value,password.current.value);SignUpFunc(name.current.value,email.current.value,password.current.value,"customer")}}>Sign Up</button>
            </form>
            <div>Created an account .Now head towards ? <div onClick={()=>{sethis(prev=>!prev)}} className="underline">login</div></div>
        </div>
    );
}

export function Login({sethis}) {
    const email=useRef();
    const password=useRef();
    const {LoginFunc}=useContext(CartContext);

    return (
<div className="Central_Default w-min font-[outfit] bg-white border-2 border-gray-300 shadow-lg rounded-lg p-8" style={{
        opacity: 0,
        animation: "fadeIn 0.5s ease-in-out forwards",
    }} >    
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <form className="flex flex-col space-y-4">
                <input type="email" ref={email} placeholder="Email" className="p-2 border rounded" />
                <input type="password" ref={password} placeholder="Password" className="p-2 border rounded" />
                <button type="button" className="bg-blue-500 text-white p-2 rounded"
                    onClick={() => {console.log(email.current.value, password.current.value);LoginFunc(email.current.value, password.current.value)}}
                >Login</button>
            </form>
            <div>Don't have an account ? <div onClick={()=>{sethis(prev=>!prev)}} className="underline">sign up</div></div>
        </div>
    );
}
// ${ver?`hidden`:``}
export function Verifier(){
    const [his,sethise]=useState(false);
    const {ver}=useContext(CartContext);

        return (
            <div className={`w-screen fixed flex items-center justify-center z-20 top-0 left-0 h-screen bg-black/60 ${ver?`hidden`:``} `  }>
                <div className="flex flex-row">
                {
                    his?<SignUp sethis={sethise}/>:<Login sethis={sethise}/>
                }

                </div>
            </div>
        )
    
    

    
}