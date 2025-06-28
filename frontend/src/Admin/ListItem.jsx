import { CartContext } from "../CartContext";
import { useContext } from "react";

function Card_Generate( {name,description, image, value ,id}) {
    const {RemoveItem} = useContext(CartContext);
    return (
        <div className="Central_Default realtive p-3  rounded-lg m-5 shadow-md hover:scale-105 transition-transform duration-300" style={{
        opacity: 0,
        animation: "fadeIn 0.5s ease-in-out forwards",
    }}>
            <img
                className="object-cover w-50 h-50 rounded-lg"
                src={image}
            />
            <div className="Central_Default absolute top-5 right-7 rounded-full opacity-80 hover:opacity-100 bg-white"
                onClick={()=>{RemoveItem(id)}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EA3323"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>
             </div>
            <div className="font-semibold mt-3">{name}</div>
            <div className="text-slate-500 text-sm">{description}</div>
            <div className="text-orange-500">${value}</div>
        </div>
    ); 
}

export function ListItem() {
    const {FoodList}=useContext(CartContext);
    return (
        <div className="felx flex-col">
        <div className="text-2xl font-semibold ml-10">Your Products</div>
            <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
                {
                    FoodList.map((item) => {return <Card_Generate
                        name={item.item_name}
                        image={item.image_url}
                        value={item.cost}
                        description={item.item_description}
                        id={item.id}
                        ratings={item.rating}
                        key={item.id}
                    />; })
                }
            </div>
        </div>
        )
    
}
