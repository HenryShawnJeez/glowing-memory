
const TopHeader = () => {
    return ( 
        <main className="relative flex gap-x-8 border-b border-slate-700 text-textWhite py-3 px-4 sm:px-6 lg:px-8 overflow-x-auto bar">
            <p className="text-sm md:text-base shrink-0 cursor-pointer text-opacity-10 font-[100]">Overview</p>
            <p className="text-sm md:text-base shrink-0 cursor-pointer text-opacity-10 font-[100]">Exchanges</p>
            <p className="text-sm md:text-base shrink-0 cursor-pointer text-opacity-10 font-[100]">News</p>
            <p className="text-sm md:text-base shrink-0 cursor-pointer text-opacity-10 font-[100]">Guides</p>
            <p className="text-sm md:text-base shrink-0 cursor-pointer text-opacity-10 font-[100]">Prediction</p>
            <p className="text-sm md:text-base shrink-0 cursor-pointer text-opacity-10 font-[100]">Historical Data</p>
            <div className="w-[5.2rem] border-b-2 border-accentBlue absolute bottom-0 left-1 sm:left-3 md:left-6"></div>
        </main>
     );
}
 
export default TopHeader;