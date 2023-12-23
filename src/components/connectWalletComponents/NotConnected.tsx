import Image from "next/image";

//Import Images
import metaMask from "../../../public/metaMask.svg"
const NotConnected = () => {
  return (
    <main>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-black opacity-80 absolute inset-0"></div>
        <div className="relative w-96 h-96 flex flex-col gap-y-4 items-center justify-center bg-white p-4 text-center rounded-lg">
            <Image src={metaMask} alt="" className="w-20" />
             <p className="text-black text-sm md:text-base lg:text-lg font-bold">Please, Connect Your Wallet To Continue.</p>
             <w3m-button />
        </div>
      </div>
    </main>
  );
};

export default NotConnected;
