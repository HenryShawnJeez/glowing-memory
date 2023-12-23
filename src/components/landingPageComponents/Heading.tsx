import Link from "next/link";

//import Icons
import { FaAngleDown } from "react-icons/fa6";

const heading = () => {
  return (
    <main className="h-[41px] flex overflow-x-auto bar">
      <div className="flex h-full w-[12.5rem] hover:bg-bgBlack  hover:bg-opacity-40 duration-500 border-r border-lightBlue items-center cursor-pointer shrink-0 py-4">
        <div className="mx-auto">
          <p className="text-textBlue font-bold text-xs">
            {" "}
            
              Total Market Cap:
              <span className="text-textWhite ml-1">$1.16T</span>
              <span className="text-textRed ml-1"> (-1.8%)</span>
            
          </p>
        </div>
      </div>
      <div className="flex h-full w-[12.5rem] hover:bg-bgBlack  hover:bg-opacity-40 duration-500 border-r border-lightBlue items-center cursor-pointer shrink-0 py-4">
        <div className="mx-auto">
          <p className="text-textBlue font-bold text-xs">
            <Link href="https://coincodex.com/market-overview#btc-dominance" target="_blank">
            BTC Dominance:<span className="text-textWhite ml-1">45.81%</span>
            <span className="text-textRed ml-1"> (-0.2%)</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="flex h-full w-[12.5rem] hover:bg-bgBlack  hover:bg-opacity-40 duration-500 border-r border-lightBlue items-center cursor-pointer shrink-0 py-4">
        <div className="mx-auto">
          <p className="text-textBlue font-bold text-xs">
          <Link href="https://coincodex.com/market-overview#volume" target="_blank">
            24th Volume:<span className="text-textWhite ml-1">$198.47B</span>
            <span className="text-textRed ml-1"> (-16.2%)</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="flex h-full w-[12.5rem] hover:bg-bgBlack  hover:bg-opacity-40 duration-500 border-r border-lightBlue items-center cursor-pointer shrink-0 py-4">
        <div className="mx-auto">
          <p className="text-textBlue font-bold text-xs">
          <Link href="https://coincodex.com/crypto/bitcoin/" target="_blank">
            BTC Price:<span className="text-textWhite ml-1">$17,445</span>
            <span className="text-textRed ml-1"> (-2.4%)</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="flex h-full w-[12.5rem] hover:bg-bgBlack  hover:bg-opacity-40 duration-500 items-center cursor-pointer shrink-0 py-4">
        <div className="mx-auto flex gap-x-3">
          <p className="text-textBlue font-bold text-xs">
            ETH Gas:<span className="text-textWhite ml-1">$1.49</span>
            <span className="text-textWhite ml-1"> (38 Gwei)</span>
          </p>
          <FaAngleDown size={14} className="text-textBlue" />
        </div>
      </div>
    </main>
  );
};

export default heading;
