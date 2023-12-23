"use client";
import Image from "next/image";
import { useRef, useState, useEffect, FormEvent } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { makeApiRequest } from "@/lib/apiUtils";
import useWalletAddress from '@/store/walletAddress';
//Import Needed Images
import bnb from "../../../public/bnb.png";
//Import Needed Icons
import { BsCopy } from "react-icons/bs";

const Body = () => {
  //Form Submission States
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [chosenETH, setChosenETH] = useState<number>();
  const [chosenIOVBalance, setChosenIOVBalance] = useState<number>();
  const [userEmail, setUserEmail] = useState<string>("");
  const [transactionID, setTransactionID] = useState<string>("");
  const { walletAddress } = useWalletAddress();

    useEffect(() => {
      const retrieveLocalStorageValues = () => {
      const storedChosenETH = localStorage.getItem("chosenETH");
      const storedChosenIOVBalance = localStorage.getItem("chosenIOVBalance");
      const storedUserEmail = localStorage.getItem("userEmail");

      setChosenETH(parseFloat(storedChosenETH || ""));
      setChosenIOVBalance(parseFloat(storedChosenIOVBalance || ""));
      setUserEmail(storedUserEmail || "");

      // Check if required values are missing and redirect to home page
      if (
        !storedUserEmail ||
        !storedChosenIOVBalance ||
        !storedChosenETH ||
        walletAddress.length === 0
      ) {
        toast.error("Kindly Fill The Form To Continue.")
        router.push("/"); // Redirect to the home page
      }
    }
    retrieveLocalStorageValues()
    })

  //States for the time
  const initialTime = parseInt(
    typeof window !== "undefined"
      ? window.localStorage.getItem("countdown") || "1200"
      : "1200",
    10
  );
  const [time, setTime] = useState<number>(initialTime);
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
  //Time Function
  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);

        if (typeof window !== "undefined") {
          window.localStorage.setItem("countdown", String(time - 1));
        }
      } else {
        router.push("/connect-wallet");
        if (typeof window !== "undefined") {
          window.localStorage.setItem("countdown", "1200");
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };
  //Form Reset Function
  const handleFormReset = () => {
    setTransactionID("");
  };
  //On Submit function
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const formData = {
      storedChosenETH: chosenETH,
      storedUserEmail: userEmail,
      storedChosenIOVBalance: chosenIOVBalance,
      storedConnectedAddress: walletAddress,
      storedTransactionID: transactionID,
    };

    makeApiRequest("/depositForm", "post", formData, {
      onSuccess: () => {
        //Handle Success
        setLoading(false);
        toast.success("Your Transaction ID  Was Submitted Successfully.");
        router.push("/connect-wallet");
      },
      onError: (error: any) => {
        //Handle Error
        handleFormReset();
        setLoading(false);
        if (error) {
          if (error === "Missing Fields") {
            toast.error("Please Fill In All The Details");
          } else {
            toast.error(
              "Your TransactionID Wasn't Submitted, Please Try Again Later."
            );
          }
        }
      },
    });
  };
  return (
    <main className="py-2 px-4 sm:px-6 lg:px-8 mt-10">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-bold text-center">
        Deposit
      </p>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-bgBlue font-bold  mt-10">
        Wallet
      </p>
      <div className="mt-8 blackShadow rounded-2xl flex items-center gap-x-5 px-4 py-2">
        <Image src={bnb} alt="bnb image" className="w-8 sm:text-10 md:w-14" />
        <div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold">
            0.00
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-bgBlue font-medium">
            BNB Smart Chain
          </p>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-bgBlue font-medium">
          Network: BNB Smart Chain BEP20
        </p>
        <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-bgBlue font-medium">
          Confirmation Block(s): <span className="ml-4">32/32 </span>{" "}
        </p>
      </div>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-bgBlue font-bold mt-6">
        Address
      </p>
      <div className="rounded-l-2xl blackShadow flex gap-x-3 justify-between items-center mt-6 px-4 py-2">
        <p
          ref={textToCopyRef}
          className="text-black text-xs sm:text-sm md:text-base lg:text-lg min-w-[9rem] font-medium break-words whitespace-pre-line"
        >
          0xD501E3b98103433B995f59198CdE1a44828Aaf7c
        </p>
        <BsCopy
          onClick={handleCopyClick}
          size={20}
          className="text-black cursor-pointer "
        />
      </div>
      <div className="flex flex-col mt-10 gap-y-2 items-center">
        <div className="spinner"></div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-bgBlue">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
            Waiting for transaction{" "}
          </span>
          {formatTime(time)}
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <input
          required
          onChange={(event: any) => setTransactionID(event.target.value)}
          value={transactionID}
          type="text"
          name="transactionID"
          id="transactionID"
          className="text-bgBlue caret-bgBlue focus:outline-none w-full px-4 py-3 mt-6 blackShadow rounded-2xl placeholder:text-xs md:placeholder:text-sm"
          placeholder="Enter Your Transaction ID"
        />
        <input
          type="submit"
          value={loading ? "Submitting..." : "Confirm"}
          className="font-bold w-full bg-bgBlue rounded-2xl my-8 py-3 md:py-4 cursor-pointer hover:bg-slate-700 duration-500"
        />
      </form>
      <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-bgBlue ">
        Minimum Deposit <span className="font-bold">0.25 BNB</span>
      </p>
      <p className="mt-4 text-xs sm:text-sm lg:text-base text-bgBlue">
        If a deposit is below the required minimum the fund will not be credited
        to your wallet.
      </p>
    </main>
  );
};

export default Body;
