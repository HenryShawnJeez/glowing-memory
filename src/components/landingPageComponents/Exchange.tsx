import Link from "next/link";
//Import Needed Icons
import { IoIosArrowDropup } from "react-icons/io";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

const Exchange = () => {
  return (
    <main className="my-10 px-4 sm:px-6 lg:px-8">
      <div className="border-b border-slate-700 relative">
        <div className="flex gap-x-1 items-center py-2">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            IOV Exchanges
          </h1>
          <IoIosArrowDropup className="text-textBlue" size={20} />
        </div>
        <div className="w-[8rem] border-b-4 border-accentBlue absolute bottom-0 left-0"></div>
      </div>
      <div className="border border-slate-700 h-20 my-10">
        <div className="flex justify-between px-4 py-1 border-b border-slate-700">
          <p className="text-xs font-light text-textBlue">EXCHANGE</p>
          <p className="text-xs font-light text-textBlue">PRICE</p>
          <p className="text-xs font-light text-textBlue flex gap-x-0.5 items-center">VOLUME<HiOutlineArrowNarrowDown size={12} className="text-accentBlue"/></p>
          <p className="text-xs font-light text-textBlue">ACTION</p>
        </div>
        <div className="flex justify-center">
          <p className="text-sm font-light text-textBlue mt-4">
            No exchanges found...
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          href=""
          target="_blank"
          className="border border-slate-700 px-4 py-2 text-xs font-bold hover:bg-bgBlack hover:bg-opacity-40 duration-500"
        >
          VIEW ALL
        </Link>
      </div>
    </main>
  );
};

export default Exchange;
