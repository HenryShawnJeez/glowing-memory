"use client"
import { useRef } from "react";
import Image from "next/image";
import { toast } from "sonner";

//Import Needed Images
import usdt from "../../../../public/usdt.svg";

//Import Needed Icons
import { BsCopy } from "react-icons/bs";
import { TbInfoTriangleFilled } from "react-icons/tb";

const Page = () => {
    ///For the text to copy
  const textToCopyRef = useRef<HTMLParagraphElement>(null);
  //The Copy Function
  const handleCopyClick = () => {
    if (textToCopyRef.current) {
      const range = document.createRange();
      const selection = window.getSelection();

      range.selectNodeContents(textToCopyRef.current);
      selection?.removeAllRanges();
      selection?.addRange(range);

      try {
        document.execCommand("copy");
        toast.success("Wallet address copied to clipboard!");
      } catch (err) {
        toast.error("Unable to copy text, try again later!");
      }

      selection?.removeAllRanges();
    }
  };
    return ( 
        <main className="bg-[#440892] h-screen text-xs md:text-sm xl:text-base py-20">
            <div className="w-[95%] sm:w-[85%] md:w-[75%] xl:w-[65%] mx-auto text-white">
                <div className="mt-8 blackShadow rounded-2xl flex items-center gap-x-5 px-4 py-2 bg-white">
                    <Image src={usdt} alt="usdt image" className="w-8 sm:text-10 md:w-14" />
                    <div>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold">
                        0.00
                      </p>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-bgBlue font-medium">
                        USDT TRC20
                      </p>
                    </div>
                </div>
                <div className="mt-12">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                      Network: TRON TRC20
                    </p>
                    <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                      Confirmation Block(s): <span className="ml-4">32/32 </span>{" "}
                    </p>
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mt-14">
                    Address
                </p>
                <div className="rounded-l-2xl blackShadow flex gap-x-3 justify-between items-center mt-6 px-4 py-4 bg-white">
                    <p
                      ref={textToCopyRef}
                      className="text-black text-xs sm:text-sm md:text-base lg:text-lg min-w-[9rem] font-medium break-words whitespace-pre-line"
                    >
                      TXxW6sujNTLoKZrBLK9oRgeMf1Ga3qmBJ5
                    </p>
                    <BsCopy
                      onClick={handleCopyClick}
                      size={20}
                      className="text-black cursor-pointer "
                    />
                </div>
                <div className="mt-14 flex gap-x-2 items-center">
                  <TbInfoTriangleFilled size={24}/>
                  <p>Payments take up to 24hours to process.</p>
                </div>
                
            </div>
            
        </main>
     );
}
 
export default Page;