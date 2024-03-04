import Image from "next/image";

//Import needed Images
import membershipLogo from "../../../public/membershipLogo.png";
import heroImage from "../../../public/heroSectionImg.jpg";

const HeroSection = () => {
    return ( 
        <main className="bg-[#6300E2] h-screen">
            <div className="absolute top-0 left-0 bg-black bg-opacity-30 h-full w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-10">
                <Image src={membershipLogo} alt="Logo" className="w-8 md:w-10 lg:w-12 xl:w-14"/>
                <div className="h-full flex flex-col items-center justify-center xl:block">
                    <div className="flex flex-col gap-y-20 md:gap-y-0 md:flex-row md:justify-between items-center -mt-20 md:mt-8">
                        <div className="brygada flex flex-col justify-center md:w-[29%]">
                            <p className="text-xs md:text-sm xl:text-base font-semibold">HOUSE OF MAKTOUM</p>
                            <p className=" mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium">Dubai Royal Membership Card</p>
                            <p className="italic text-sm  md:text-base lg:text-xl font-medium mt-8">The Dubai Royal Membership Card is issued only under the recommendation of a member of the royal family.</p>
                        </div>
                        <Image src={heroImage} alt="An Image" className="w-full md:w-[59%] xl:w-[69%] h-full"/>
                    </div>
                </div>
                
            </div>
            
        </main>
     );
}
 
export default HeroSection;