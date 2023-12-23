"use client"
import { useState } from "react";
//Import needed Icons
import { RiCloseCircleFill } from "react-icons/ri";
//Import Needed Component
import Loading from "@/app/loading";

type PopupProps = {
  onClose: () => void;
};

const Popup = ({ onClose }: PopupProps) => {
  //Frame Loading State
  const [isIframeLoading, setIsIframeLoading] = useState<boolean>(true);
  //Off Frame Loading Function
  const handleIframeLoad = () => {
    setIsIframeLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-black opacity-80 absolute inset-0"></div>
      <div className="relative w-96 md:w-[30rem] h-[30rem] flex flex-col gap-y-4 items-center justify-center bg-white p-4 text-center rounded-lg">
        {isIframeLoading && <Loading />}
        <RiCloseCircleFill
          onClick={onClose}
          className="absolute top-0 right-0 p-2 cursor-pointer z-[999] text-black"
          size={40}
        />
        <iframe
          src="https://tawk.to/chat/6572beb007843602b8ff9140/1hh43hoo3"
          width="100%"
          height="100%"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default Popup;
