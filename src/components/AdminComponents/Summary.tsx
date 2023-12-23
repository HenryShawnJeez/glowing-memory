//Import Needed Utilities
import { formatDate } from "@/lib/dateUtils";
//Import Needed Icons
import { FaUserCheck } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";

type summaryProps = {
    contactFormLength: number,
    depositFormLength: number,
    firstFormLength: number
}

const Summary = ({contactFormLength, depositFormLength, firstFormLength}: summaryProps) => {
    //For the Date
    const currentDate = new Date()
    const formattedDate = formatDate(currentDate)
    return ( 
        <main className="">
            <div className="flex justify-end">
               <p className="text-xs sm:text-sm lg:text-base text-textWhite font-semibold">{formattedDate}.</p> 
            </div>
            <div className="flex gap-x-5 overflow-x-auto special mt-10 pb-4">
               <div className="w-1/4 min-w-[18rem] bg-[#4CB9E7] p-8 flex gap-x-5 rounded-md">
               <FaUserCheck className="text-white" size={40}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">{firstFormLength}</p>
                        <p className="text-base">Total First Form</p>
                    </div>
                </div>
                <div className="w-1/4 min-w-[18rem] bg-[#FB8B24] p-8 flex gap-x-5 rounded-md">
                    <FaCheckDouble className="text-white" size={40}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">{depositFormLength}</p>
                        <p className="text-base">Total Deposit Forms</p>
                    </div>
                </div>
                <div className="w-1/4 min-w-[18rem] bg-[#65B741] p-8 flex gap-x-5 rounded-md">
                    <BsInfoCircleFill className="text-white" size={40}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">{contactFormLength}</p>
                        <p className="text-base">Total Contact Form</p>
                    </div>
                </div> 
            </div>
            
        </main>
     );
}
 
export default Summary;