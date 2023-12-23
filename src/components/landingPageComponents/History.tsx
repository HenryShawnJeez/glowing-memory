import { getCurrentDate } from "@/utils/RandomNumber";//Import Icons
import { IoMdArrowDropleft } from "react-icons/io";

const History = () => {
    //Get today's date
    const today = getCurrentDate();
    return ( 
        <main className="px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between">
            <div className="w-full lg:w-[49%] border-t border-slate-700 py-8 overflow-x-auto bar"> 
                <p className="text-sm sm:text-base md:text-lg font-bold">Carlive Chain Price Closing History by Level</p>
                <div className="flex justify-between mt-10">
                    <div className="min-w-[20rem] md:w-2/4">
                        <p className="text-xs font-light text-textBlue">PRICE</p>
                        <div className="flex gap-x-3 mt-1">
                            <p className="text-sm md:text-base font-bold">$0.010034</p>
                            <p className="flex gap-x-1 items-center"><IoMdArrowDropleft className="text-textRed" size={20}/> <span className="text-sm md:text-base font-bold text-textRed">ATH</span></p>
                        </div>
                        <p className="text-sm md:text-base font-bold">$0.010000</p>
                        <p className="text-sm md:text-base font-bold">$0.009000</p>
                        <p className="text-sm md:text-base font-bold">$0.008000</p>
                        <p className="text-sm md:text-base font-bold">$0.007000</p>
                        <p className="text-sm md:text-base font-bold">$0.006000</p>
                        <div className="flex gap-x-3">
                            <p className="text-sm md:text-base font-bold">$0.000160</p>
                            <p className="flex gap-x-1 items-center"><IoMdArrowDropleft className="text-textGreen" size={20}/> <span className="text-sm md:text-base font-bold text-textGreen">Price Now</span></p>
                        </div>
                        <p className="text-sm md:text-base font-bold">$0.000100</p>
                        <p className="text-sm md:text-base font-bold">$0.00</p>
                        <p className="text-sm md:text-base font-bold">$0.00</p>
                        <p className="text-sm md:text-base font-bold">$0.00</p>
                        <p className="text-sm md:text-base font-bold">$0.00</p>
                    </div>
                    <div className="min-w-[10rem] md:w-1/2 flex flex-col items-end">
                         <p className="text-xs font-light text-textBlue">DAYS ABOVE</p>
                         <p className="text-sm md:text-base font-bold mt-1">-</p>
                         <p className="text-sm md:text-base font-bold">0</p>
                         <p className="text-sm md:text-base font-bold">4</p>
                         <p className="text-sm md:text-base font-bold">7</p>
                         <p className="text-sm md:text-base font-bold">8</p>
                         <p className="text-sm md:text-base font-bold">9</p>
                         <p className="text-sm md:text-base font-bold">811</p>
                         <p className="text-sm md:text-base font-bold">1549</p>
                         <p className="text-sm md:text-base font-bold">1726</p>
                         <p className="text-sm md:text-base font-bold">1726</p>
                         <p className="text-sm md:text-base font-bold">1726</p>
                         <p className="text-sm md:text-base font-bold">1726</p>
                    </div>
                    <div className="min-w-[12rem] md:w-1/2 flex flex-col items-end">
                        <p className="text-xs font-light text-textBlue">% OF CARLIVE CHAIN&apos;S LIFE</p>
                        <p className="text-sm md:text-base font-bold mt-1">-</p>
                        <p className="text-sm md:text-base font-bold">0.00%</p>
                        <p className="text-sm md:text-base font-bold">0.23%</p>
                        <p className="text-sm md:text-base font-bold">0.41%</p>
                        <p className="text-sm md:text-base font-bold">0.46%</p>
                        <p className="text-sm md:text-base font-bold">0.52%</p>
                        <p className="text-sm md:text-base font-bold">46.99%</p>
                        <p className="text-sm md:text-base font-bold">89.75%</p>
                        <p className="text-sm md:text-base font-bold">100.00%</p>
                        <p className="text-sm md:text-base font-bold">100.00%</p>
                        <p className="text-sm md:text-base font-bold">100.00%</p>
                        <p className="text-sm md:text-base font-bold">100.00%</p>
                    </div>
                </div>
                <p className="text-sm md:text-base text-textBlue my-8">The table above shows the number of days which Carlive Chain closed above a certain price level.</p>
            </div>
            <div className="w-full lg:w-[49%] border-t border-slate-700 py-8 overflow-x-auto bar"> 
                <p className="text-sm sm:text-base md:text-lg font-bold">Carlive Chain Price & ROI on this Date</p>
                <div className="flex justify-between mt-10">
                <div className="min-w-[20rem] md:w-2/4">
                    <p className="text-xs font-light text-textBlue">DATE</p>
                    <div className="flex gap-x-3 mt-1">
                            <p className="text-sm md:text-base font-bold">{today}, 2023</p>
                            <p className="flex gap-x-1 items-center"><IoMdArrowDropleft className="text-textGreen" size={20}/> <span className="text-sm md:text-base font-bold text-textGreen">Today</span></p>
                        </div>
                        <p className="text-sm md:text-base font-bold">{today}, 2022</p>
                        <p className="text-sm md:text-base font-bold">{today}, 2021</p>
                        <p className="text-sm md:text-base font-bold">{today}, 2020</p>
                        <p className="text-sm md:text-base font-bold">{today}, 2019</p>
                </div> 
                <div className="min-w-[10rem] md:w-1/2 flex flex-col items-end">
                    <p className="text-xs font-light text-textBlue">PRICE</p>
                    <p className="text-sm md:text-base font-bold mt-1">$0.000150</p>
                    <p className="text-sm md:text-base font-bold">$0.000150</p>
                    <p className="text-sm md:text-base font-bold">$0.000210</p>
                    <p className="text-sm md:text-base font-bold">$0.000176</p>
                    <p className="text-sm md:text-base font-bold">$0.000297</p>
                </div>
                <div className="min-w-[12rem] md:w-1/2 flex flex-col items-end">
                    <p className="text-xs font-light text-textBlue">ROI</p>
                    <p className="text-sm md:text-base font-bold mt-1">-</p>
                    <p className="text-sm md:text-base text-textGreen font-bold">0.00%</p>
                    <p className="text-sm md:text-base text-textRed font-bold">-28.65%</p>
                    <p className="text-sm md:text-base text-textRed font-bold">-15.21%</p>
                    <p className="text-sm md:text-base text-textRed font-bold">-49.64%</p>
                </div>
                </div>
                <p className="text-sm md:text-base text-textBlue my-8">The table above shows the price and ROI of Carlive Chain today and previous years on the same date ({today}).</p>
            </div>
        </main>
     );
}
 
export default History;