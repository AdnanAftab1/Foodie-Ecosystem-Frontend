import {useContext,useRef, useState } from "react"
import { CartContext } from "../CartContext"



export function AddItem({setter}) {
    const name=useRef();
    const price=useRef();
    const rating=useRef();
    const image=useRef();
    const Description=useRef();
    const NewCategory=useRef();
    const {options,addItem}=useContext(CartContext);
    const newOptions=[{category_name:"others",id:""},...options.slice(1)];

    const [category,setcategory]=useState("others")

      
    
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Product Information</h1>
            <form className="flex flex-col mt-4">
                <div className="grid grid-cols-2">
                    <input type="text" placeholder="Name" ref={name}
                           className="border border-gray-300 rounded p-2 m-2"/>
                    {/*<DropDown title={<>{category}*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"*/}
                    {/*         fill="#434343">*/}
                    {/*        <path d="M480-360 280-560h400L480-360Z"/>*/}
                    {/*    </svg>*/}
                    {/*</>}>*/}
                    {/*    {newOptions.map((item, index) => {*/}
                    {/*        return (<button type="button" key={index} onClick={() => {*/}
                    {/*            console.log(item.category_name);*/}
                    {/*            setcategory(item.category_name)*/}
                    {/*        }}*/}
                    {/*                        className="Central_Default m-1 bg-white w-full inset-shadow-slate-500/40 hover:inset-shadow-slate-700/70 inset-shadow-xs ">{item.category_name}</button>)*/}
                    {/*    })}*/}
                    {/*</DropDown>*/}
                    <select name="category" value={category} className="dropdown mt-2 w-full h-fit p-2 bg-gray-100 border-1 border-gray-300 rounded-sm"
                            id="category">
                        {
                            newOptions.map((item) => {
                                return (<option value={item.category_name} key={item.id} onClick={() => {
                                    setcategory(item.category_name)
                                }} className="m-1">{item.category_name}</option>)
                            })
                        }
                    </select>
                    {/*<select name="cars" id="cars">*/}
                    {/*    <option value="volvo">Volvo</option>*/}
                    {/*    <option value="saab">Saab</option>*/}
                    {/*    <option value="opel">Opel</option>*/}
                    {/*    <option value="audi">Audi</option>*/}
                    {/*</select>*/}
                    <input type="text" placeholder="Price" ref={price}
                           className="border border-gray-300 rounded p-2 m-2"/>
                    <input type="text" placeholder="Rating" ref={rating}
                           className="border border-gray-300 rounded p-2 m-2"/>
                </div>
                <input type="text" placeholder="Description" ref={Description}
                       className="border border-gray-300 rounded p-2 m-2"/>
                <input type="text" placeholder="New Category" ref={NewCategory} className={`border border-gray-300 rounded p-2 m-2 `+ (category==="others"?``:`hidden`)} />
                <input type="text" placeholder="Image URL" ref={image} className="border border-gray-300 rounded p-2 m-2" />
                <button type="button" className="border-1 rounded" onClick={()=>{
                    const objectItem={
                        item_name:name.current.value,
                        rating:rating.current.value,
                        cost:Number(price.current.value),
                        category_id:category,
                        item_description:Description.current.value,
                        image_url:image.current.value
                    }
                    addItem(objectItem,NewCategory.current.value);
                    setter();
                     }}>Add Item</button>
            </form>
        </div>  
    )
    
}


export function DropDown({title,children}) {
    
    return (
    <div className="dropdown mt-2 w-full">
  <button type="button" className="dropbtn w-full  bg-neutral-100 p-2  rounded flex flex-row items-center justify-center">{title}</button>
  <div className="dropdown-content m-2 mt-0 w-full bg-white rounded p-2 shadow-sm ml-0">
    {children}
  </div>
</div>)
}
