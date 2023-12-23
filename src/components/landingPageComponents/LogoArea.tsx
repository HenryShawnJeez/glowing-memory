import Image from "next/image";
//Import Icons
import { IoSearchSharp } from "react-icons/io5";
//Import needed Images
import logo from "../../../public/logo.png";
const LogoArea = () => {
    return ( 
        <main className="bg-bgBlack px-4 flex justify-between h-[50px] overflow-x-auto bar gap-x-10">
            <div className="flex gap-x-2 shrink-0">
                <Image src={logo} alt="logo" className="w-8 md:w-10" />
                <p className="font-black text-textWhite my-auto text-lg sm:text-xl lg:text-2xl">IOV</p>
            </div>
            <div className="w-80 shrink-0 border-l border-lightBlue flex justify-between items-center">
                <input type="text" name="search" id="search" className="outline-0 bg-inherit w-[90%] h-full placeholder:center placeholder:text-sm px-8 text-textWhite placeholder:text-textBlue" placeholder="Search for coins, ICOs and exchanges"/>
                <IoSearchSharp className="text-textBlue" size={20}/>
            </div>
        </main>
     );
}
 
export default LogoArea;