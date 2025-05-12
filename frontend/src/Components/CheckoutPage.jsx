import { CartTotal } from "./OrderPage";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router";

export function CheckoutPage() {
    const { total } = useContext(CartContext);
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-2 max-md:grid-cols-1  pt-10">
            <DeliveryDetails/>
            <CartTotal  total={total} Button={() => {
                return (
    <></>                )
            }} />
        </div>
    )
}
function DeliveryDetails() {
    return (
        <div className="flex flex-col ">
            <h1 className="text-3xl font-bold">Delivery Information</h1>
            <form className="flex flex-col mt-4">
                <div className="">
                    <input type="text" placeholder="First Name" className="border border-gray-300 rounded p-2 m-2" />
                    <input type="text" placeholder="Last Name" className="border border-gray-300 rounded p-2 m-2" />
                </div>
                <input type="text" placeholder="Email address" className="border border-gray-300 rounded p-2 m-2" />
                <input type="text" placeholder="Street" className="border border-gray-300 rounded p-2 m-2" />
                <div>
                    <input type="text" placeholder="City" className="border border-gray-300 rounded p-2 m-2" />
                    <input type="text" placeholder="State" className="border border-gray-300 rounded p-2 m-2" />
                </div>
                <div>
                    <input type="text" placeholder="Zip Code" className="border border-gray-300 rounded p-2 m-2" />
                    <input type="text" placeholder="Country" className="border border-gray-300 rounded p-2 m-2" />
                </div>
                <input type="text" placeholder="Phone Number" className="border border-gray-300 rounded p-2 m-2" />
                <button type="submit" className="bg-blue-500 text-white rounded-lg p-2">Submit</button>
            </form>
        </div>
    )
}