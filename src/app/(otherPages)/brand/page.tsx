"use client";
import { useState } from "react";
//Import needed icons
import { RiChatSmile3Fill } from "react-icons/ri";
//Import Needed Components
import Heading from "@/components/BrandComponents/Heading";
import Body from "@/components/BrandComponents/Body";
import Footer from "@/components/Footer";
import Popup from "@/components/LiveChat";

const BrandPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <main className="h-screen w-full overflow-y-auto">
      <div className="max-w-[60rem] mx-auto bg-white">
        <Heading />
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

export default BrandPage;
