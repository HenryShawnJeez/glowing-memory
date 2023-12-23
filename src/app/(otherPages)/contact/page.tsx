"use client";
import { useState } from "react";
//Import needed icons
import { RiChatSmile3Fill } from "react-icons/ri";
//Import Needed Components
import Footer from "@/components/Footer";
import Heading from "@/components/contactComponents/Heading";
import Form from "@/components/contactComponents/Form";
import Popup from "@/components/LiveChat";

const ContactPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <main className="h-screen w-full overflow-y-auto">
      <div className="max-w-[60rem] mx-auto bg-white">
        <Heading />
        <Form />
          <button
            onClick={togglePopup}
            className="bg-accentBlue text-white p-2 rounded-[50%] cursor-pointer fixed bottom-10 right-4 sm:right-6 md:right-8 lg:right-10 shadow-md"
          >
            <RiChatSmile3Fill size={24}/>
          </button>

          {isPopupOpen && <Popup onClose={togglePopup} />}
          <Footer />
        </div>
    </main>
  );
};

export default ContactPage;
