//Import Needed Icons
import { CgChevronDoubleLeft } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
import ColoredBox from "./ColoredBox";

//Import needed images
import flag from "../../../public/usd.png";
import btc from "../../../public/btc.png";
import eth from "../../../public/eth.png";
import usdt from "../../../public/usdt.png";

const Performance = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <p className="text-sm sm:text-base md:text-lg font-bold">
        Carlive Chain Performance
      </p>
      <div className="flex gap-x-1 overflow-x-auto bar mt-4 h-8">
        <ColoredBox
          width="w-[22.7rem]"
          color="bg-inherit"
          text="CHANGE"
          position="start"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="1H"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="24H"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="7D"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="1M"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="3M"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="6M"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="YTD"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="1Y"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="3Y"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="5Y"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="ALL"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
      </div>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-1">
        <div className="flex gap-x-1.5 items-center w-[22.7rem] shrink-0">
          <div className="flex">
            <CgChevronDoubleLeft size={14} className="text-accentBlue" />
            <Image src={flag} alt="icon" className="w-4" />
          </div>
          <p className="text-sm md:text-base text-accentBlue font-bold hover:text-textWhite duration-500">
            <Link
              href="https://coincodex.com/convert/carlive-chain/usd/"
              target="_blank"
            >
              IOV/USD
            </Link>
          </p>
        </div>
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-54.95%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-98.48%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
      </div>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-1">
        <div className="flex gap-x-1.5 items-center w-[22.7rem] shrink-0">
          <div className="flex">
            <CgChevronDoubleLeft size={14} className="text-accentBlue" />
            <Image src={btc} alt="icon" className="w-4" />
          </div>
          <p className="text-sm md:text-base text-accentBlue font-bold hover:text-textWhite duration-500">
            <Link
              href="https://coincodex.com/convert/carlive-chain/bitcoin/"
              target="_blank"
            >
              IOV/BTC
            </Link>
          </p>
        </div>
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-0.49%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="2.42%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="10.57%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-0.17%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-16.58%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-29.83%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-39.50%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="45.90%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-88.39%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-99.57%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
      </div>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-1">
        <div className="flex gap-x-1.5 items-center w-[22.7rem] shrink-0">
          <div className="flex">
            <CgChevronDoubleLeft size={14} className="text-accentBlue" />
            <Image src={eth} alt="icon" className="w-4" />
          </div>
          <p className="text-sm md:text-base text-accentBlue font-bold hover:text-textWhite duration-500">
            <Link
              href="https://coincodex.com/convert/carlive-chain/ethereum/"
              target="_blank"
            >
              IOV/ETH
            </Link>
          </p>
        </div>
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-0.43%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="2.61%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="12.68%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-5.77%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-12.11%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-28.35%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-35.36%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="60.18%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-95.63%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-99.65%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
      </div>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-1">
        <div className="flex gap-x-1.5 items-center w-[22.7rem] shrink-0">
          <div className="flex">
            <CgChevronDoubleLeft size={14} className="text-accentBlue" />
            <Image src={usdt} alt="icon" className="w-4" />
          </div>
          <p className="text-sm md:text-base text-accentBlue font-bold hover:text-textWhite duration-500">
            <Link
              href="https://coincodex.com/convert/carlive-chain/tether/"
              target="_blank"
            >
              IOV/USDT
            </Link>
          </p>
        </div>
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="-0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="-0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="-0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="greenShade"
          text="0.00%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-54.95%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[5.5rem]"
          color="redShade"
          text="-98.48%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
      </div>
      <p className="text-sm md:text-base text-textBlue my-8">
        Carlive Chain price in US Dollar has increased by{" "}
        <span className="font-bold text-textGreen">0.00% </span>in the last 1
        month. IOV is down{" "}
        <span className="font-bold text-textRed"> -5.77%</span> against Ethereum
        and down <span className="font-bold text-textRed">-0.17%</span> against
        Bitcoin in the last 1 month.
      </p>
      <div className="border-b border-slate-700 mb-8"></div>
    </main>
  );
};

export default Performance;
