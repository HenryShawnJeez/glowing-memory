import Link from "next/link";

const SwapBtnSection = () => {
    return ( 
        <main className="py-2 px-4 sm:px-6 lg:px-8 flex justify-between mt-10">
           <Link href="" className="px-6 md:px-8 py-2 text-accentBlue blueShadow font-semibold rounded-3xl text-xs md:text-sm">Swap</Link> 
           <Link href="" className="px-6 md:px-8 py-2 text-accentBlue blueShadow font-semibold rounded-3xl text-xs md:text-sm">Liquidity</Link> 
           <Link href="" className="px-6 md:px-8 py-2 text-accentBlue blueShadow font-semibold rounded-3xl text-xs md:text-sm">Perpetual</Link> 
        </main>
     );
}
 
export default SwapBtnSection;