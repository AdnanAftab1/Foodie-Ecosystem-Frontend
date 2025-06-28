import { useContext,useEffect  } from "react";
import { CartContext } from "../CartContext";

export function TrackPage(){
    const {Orders,LoadOrders,accessToken} =useContext(CartContext);
    useEffect(() => {
  if (accessToken) {
    LoadOrders();
  }
}, [accessToken]);


    return (<>
            {
                Orders.map((Order)=>{
                    return (
                        <OrderPlaced order={Order} />
                    )
                })
            }
        </>

    )
}


function OrderPlaced({order}){
    let total=0;
    return (

            <div className={"w-full m-2 mt-4 p-2 text-slate-500 italic bg-white rounded-lg shadow-md shadow-black/40"}>
                <div className={"font-semibold"}>Order ID:{order.id}</div>
                <div>Time of Order:{order.time_of_order}</div>
                <div className={"flex"}> Status: <p className={" font-bold text-orange-500"}>{order.status}</p></div>
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
