import Link from "next/link";
//Icons
import { AiFillThunderbolt } from "react-icons/ai";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const notFound = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center text-center gap-y-5 px-4">
          <h1 className="flex items-center text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] text-accentBlue font-bold">4 <span><RiCheckboxBlankCircleFill /> <AiFillThunderbolt  className="absolute z-10 text-white top-0"/></span>4</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-textWhite">The Page you are trying to reach could not be found at the moment.</p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-textWhite">Please try again later.</p>
          <Link href="/" className="font-bold bg-accentBlue text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 border border-accentBlue rounded-lg hover:bg-white hover:text-accentBlue duration-500">Back To Home</Link>
      </div>
    </main>
  );
};

export default notFound;
