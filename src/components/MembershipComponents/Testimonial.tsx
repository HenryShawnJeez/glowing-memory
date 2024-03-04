import Image from "next/image";

//Import Needed Images
import image from "../../../public/downImage.jpg";

//Import Needed Icons
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
    return ( 
        <main className="bg-white py-20">
            <div className="w-[95%] sm:w-[85%] md:w-[75%] xl:w-[65%] mx-auto text-xs md:text-sm xl:text-base flex flex-col gap-y-10 items-center text-center text-black">
                <RiDoubleQuotesL size={30} className="text-green-900"/>
                <p className="roboto text-base md:text-lg lg:text-xl xl:text-2xl font-bold w-[90%] md:w-[80%] xl:w-[70%]">“We are building a new reality for our people, a new future for our children, and a new model of development.”</p>
                <Image src={image} alt="Sheikh Mohammed Image" className="rounded-[50%] w-10 h-10"/>
                <p className="font-semibold tracking-[3px] w-[90%] md:w-[80%] xl:w-[70%]">SHEIKH MOHAMMED BIN RASHID AL MAKTOUM</p>
            </div>
        </main>
     );
}
 
export default Testimonial;