"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
//Import Needed Icons
import { PiPackageFill } from "react-icons/pi";
//Import Needed Components
import OrderCreation from "./OrderCreation";


const OrderSummary = (orders : any) => {
    const router = useRouter()
    //Set States
    const [create, setCreate] = useState<boolean>(false)
    // Function
    const toggleCreate = () => {
        setCreate((prevCreate => !prevCreate))
      }
    return ( 
        <>
            {create && <OrderCreation onClose={toggleCreate}/> }
        <main className="mt-10 overflow-x-auto special">
            <div className="flex justify-between w-full min-w-[40rem]">
                <p className="text-lg lg:text-xl font-bold">Ongoing Shipments</p>
                <button onClick={toggleCreate} className="p-3 bg-orange text-white rounded-md font-semibold hover:bg-orange1 duration-500">Create New Order</button>
            </div>
            {orders.length === 0 && <div className="mt-10 w-full min-w-[40rem]"><p className="text-center text-xl font-bold">No Shipment Order Yet</p></div> }
            {orders.length !== 0 && <div className="mt-10 w-full min-w-[40rem]"> 
            {orders?.orders && orders.orders.map((order: any) => (
                    <div key={order.id} onClick={() => router.push(`/admin/orders/${order.id}`)}className="flex justify-between items-center mt-4 border-b border-gray-400 py-2 cursor-pointer">
                    <PiPackageFill className="text-orange" size={30}/>
                    <p className="text-base sm:text-lg lg:text-xl font-bold w-1/4 text-center">{order.trackingNumber}</p>
                    <p className="text-base sm:text-lg lg:text-xl font-bold w-1/4 text-center">{order.originPort}</p>
                    <p className="text-base sm:text-lg lg:text-xl font-bold w-1/4 text-center">{new Date(order.deliveryRequiredDate).toLocaleDateString()}</p>
                    <p className="text-sm lg:text-base w-1/4 text-center text-green-600 font-semibold">{order?.statusChanges ? order.statusChanges.status : "Null"}</p>
                </div>  
             ))}
            </div>
            }
        </main>
        </>
     );
}
 
export default OrderSummary;