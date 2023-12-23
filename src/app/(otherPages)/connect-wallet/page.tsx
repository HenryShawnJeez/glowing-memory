"use client";
import { useState } from "react";
//Import needed icons
import { RiChatSmile3Fill } from "react-icons/ri";
//Import Components
import Heading from "@/components/connectWalletComponents/Heading";
import SwapBtnSection from "@/components/connectWalletComponents/SwapBtnSection";
import Body from "@/components/connectWalletComponents/Body";
import Footer from "@/components/Footer";
import Popup from "@/components/LiveChat";

const ConnectWallet = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <main className="h-screen w-full overflow-y-auto">
      <div className="max-w-[60rem] mx-auto bg-white">
        <Heading />
        <SwapBtnSection />
        <Body />
        <button
          onClick={togglePopup}
          className="bg-accentBlue text-white p-2 rounded-[50%] cursor-pointer fixed bottom-10 right-4 sm:right-6 md:right-8 lg:right-10 shadow-md"
        >
          <RiChatSmile3Fill size={24} />
        </button>

        {isPopupOpen && <Popup onClose={togglePopup} />}
        <Footer />
      </div>
    </main>
  );
};

export default ConnectWallet;
