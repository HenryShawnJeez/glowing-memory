"use client";
import useStore from "@/store/store";
import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

//Import Icons
import { HiFire } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdOutlineRefresh } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillCreditCardFill } from "react-icons/bs";

const Body = () => {
  const router = useRouter();
  //For the numbers
  const { chosenNumber, setNumber } = useStore();
  //For the form
  // For the Amount to send and everything under
  const [gasFee, setGasFee] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  //For the Amount to send and everything under
  useEffect(() => {
    switch (chosenNumber) {
      case 25000000: 
        setGasFee(0.25);
        setQuantity(25);
        setBalance(49);
        break;
      case 50000000:
        setGasFee(1);
        setQuantity(50);
        setBalance(138);
        break;
      case 75000000:
        setGasFee(1.5);
        setQuantity(75);
        setBalance(259);
        break;
      case 100000000:
        setGasFee(2.5);
        setQuantity(100);
        setBalance(410.78);
        break;
      default:
        setGasFee(0);
        setQuantity(0);
        setBalance(0);
    }
  }, [chosenNumber]);
  //On Submit Function
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem("chosenETH", balance.toString())
    localStorage.setItem("chosenIOVBalance", quantity.toString())
    router.push("/deposit-bnb");
  };
  return (
    <main className="py-2 px-4 sm:px-6 lg:px-8 mt-10">
      <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-bold">
        Swap
      </p>
      <p className="text-accentBlue font-semibold mt-4 text-xs sm:text-sm md:text-base">
        Trade token in an instant
      </p>
      <div className="flex gap-x-3 items-center mt-4">
        <HiFire size={20} className="text-slate-700 cursor-pointer" />
        <IoMdSettings size={20} className="text-slate-700 cursor-pointer" />
        <RxCounterClockwiseClock
          size={16}
          className="text-slate-700 cursor-pointer"
        />
        <MdOutlineRefresh
          size={20}
          className="text-gray-400 cursor-not-allowed"
        />
      </div>
      <form className="mt-10" onSubmit={onSubmit}>
        <div className="flex justify-between items-end">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 font-bold">
            ETH
          </p>
          <p className="text-accentBlue font-semibold text-xs sm:text-sm md:text-base">
            Balance :
          </p>
        </div>
        <input
          className="h-20 px-2 text-slate-700 mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-right w-full font-bold blackShadow rounded-2xl bg-accentBlue bg-opacity-10"
          type="number"
          name="balance"
          id="balance"
          disabled
          value={balance}
        />
        <div className="flex cursor-not-allowed items-center justify-center blackShadow rounded-[50%] my-10 bg-accentBlue bg-opacity-10 mx-auto h-8 w-8">
          <IoIosArrowUp className="text-accentBlue" size={24} />
        </div>
        <div className="flex justify-between items-end mt-10">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 font-bold">
            IOV
          </p>
          <p className="text-accentBlue font-semibold text-xs sm:text-sm md:text-base">
            Balance :
          </p>
        </div>
        <input
          className="h-20 px-2 text-slate-700 mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-right w-full font-bold blackShadow rounded-2xl bg-accentBlue bg-opacity-10"
          type="number"
          name="balance"
          id="balance"
          disabled
          value={chosenNumber}
        />
        <div className="flex justify-between mt-10">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-700 font-bold">
            Quantity {quantity}%
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-700 font-bold">
            Gas fee: {gasFee} BNB
          </p>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={() => setNumber(25000000)}
            className={`font-bold px-4 sm:px-6 md:px-8 lg-px-10 py-2 rounded-lg bg-${
              chosenNumber === 25000000
                ? "inherit text-accentBlue"
                : "accentBlue"
            } border border-accentBlue hover:bg-inherit duration-500 hover:text-accentBlue text-xs md:text-sm lg:text-base`}
          >
            25%
          </button>
          <button
            type="button"
            onClick={() => setNumber(50000000)}
            className={`font-bold px-4 sm:px-6 md:px-8 lg-px-10 py-2 rounded-lg bg-${
              chosenNumber === 50000000
                ? "inherit text-accentBlue"
                : "accentBlue"
            } border border-accentBlue hover:bg-inherit duration-500 hover:text-accentBlue text-xs md:text-sm lg:text-base`}
          >
            50%
          </button>
          <button
            type="button"
            onClick={() => setNumber(75000000)}
            className={`font-bold px-4 sm:px-6 md:px-8 lg-px-10 py-2 rounded-lg bg-${
              chosenNumber === 75000000
                ? "inherit text-accentBlue"
                : "accentBlue"
            } border border-accentBlue hover:bg-inherit duration-500 hover:text-accentBlue text-xs md:text-sm lg:text-base`}
          >
            75%
          </button>
          <button
            type="button"
            onClick={() => setNumber(100000000)}
            className={`font-bold px-4 sm:px-6 md:px-8 lg-px-10 py-2 rounded-lg bg-${
              chosenNumber === 100000000
                ? "inherit text-accentBlue"
                : "accentBlue"
            } border border-accentBlue hover:bg-inherit duration-500 hover:text-accentBlue text-xs md:text-sm lg:text-base`}
          >
            100%
          </button>
        </div>
        <button
          disabled
          className="w-full mt-10 bg-gray-300 rounded-2xl font-bold text-xs sm:text-sm py-3 md:text-base cursor-not-allowed"
        >
          Swap
        </button>
        <p className="my-4 text-red-500 text-xs sm:text-sm md:text-base text-center font-bold">
          Insufficient BNB Smartchain
        </p>
        <button
          type="submit"
          className="bg-accentBlue border-2 border-accentBlue hover:bg-inherit duration-500 hover:text-accentBlue font-bold flex items-center justify-center gap-x-2 py-3 w-full text-xs sm:text-sm md:text-base rounded-2xl"
        >Deposit BNB <BsFillCreditCardFill size={20}/></button>
      </form>
    </main>
  );
};

export default Body;
