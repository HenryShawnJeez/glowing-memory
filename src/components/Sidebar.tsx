"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { signOut } from 'next-auth/react'

//Import Icons
import { GoHomeFill } from "react-icons/go";
import { FaAward } from "react-icons/fa6";
import { MdReceiptLong } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { LuMenuSquare } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";

const Sidebar = () => {
    const pathName = usePathname()
  //For the sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //Function to toggle the sidebar
  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <main className="relative">
      <div className="fixed left-0 top-0 z-50 hidden h-screen w-80 bg-white p-10 lg:block">
        <p className="mt-10 flex gap-x-3 border-b border-gray-600 pb-4 text-sm font-bold text-accentBlue md:text-base">
          <RiAdminFill size={24} /> ADMINISTRATION
        </p>
        <div className={`mt-20 flex flex-col gap-y-5 font-semibold`}>
          <Link
            href="/admin/dashboard"
            prefetch
            className={`${pathName === "/admin/dashboard" ? "text-accentBlue -translate-y-2 translate-x-2" : "text-black"} flex items-center gap-x-3 rounded-md p-4 text-sm duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-accentBlue hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-accentBlue active:text-accentBlue md:text-base`}
          >
            <GoHomeFill size={24} /> Dasboard
          </Link>
          <Link
            href="/admin/forms"
            prefetch
            className={`${pathName === "/admin/forms" ? "text-accentBlue -translate-y-2 translate-x-2" : "text-black"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-accentBlue hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-accentBlue active:text-accentBlue md:text-base`}
          >
            <MdReceiptLong size={24} /> Forms
          </Link>
          <Link
            href="/admin/membership"
            prefetch
            className={`${pathName === "/admin/membership" ? "text-accentBlue -translate-y-2 translate-x-2" : "text-black"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-accentBlue hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-accentBlue active:text-accentBlue md:text-base`}
          >
            <FaAward size={24} /> Membership Forms
          </Link>
          <Link
            href="/admin/contact"
            prefetch
            className={`${pathName === "/admin/contact" ? "text-accentBlue -translate-y-2 translate-x-2" : "text-black"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-accentBlue hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-accentBlue active:text-accentBlue md:text-base`}
          >
            <IoMdContact size={24} /> Contact
          </Link>
        </div>
        <button
          onClick={() => signOut()}
          className={`absolute bottom-20 flex items-center gap-x-3 rounded-md p-4 text-sm text-black duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-accentBlue hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-accentBlue active:text-accentBlue`}
        >
          <LuLogOut size={24} /> Logout
        </button>
      </div>
      <LuMenuSquare
        className="absolute left-4 z-[2] top-4 cursor-pointer text-accentBlue focus:text-blue lg:hidden"
        size={40}
        onClick={toggleOpen}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1}}
            className="fixed left-0 top-0 z-50 h-screen w-80 bg-white p-10 lg:hidden"
          >
            <AiOutlineCloseSquare
              onClick={toggleOpen}
              size={40}
              className="mb-10 cursor-pointer text-accentBlue"
            />
            <p className="mt-10 flex gap-x-3 border-b border-gray-600 pb-4 text-sm font-bold text-accentBlue md:text-base">
              <RiAdminFill size={24} /> ADMINISTRATION
            </p>
            <div className={`mt-20 flex flex-col gap-y-5 font-semibold`}>
              <Link
                href="/admin/dashboard"
                prefetch
                className={`${pathName === "/admin/dashboard" ? "text-accentBlue -translate-y-2 translate-x-2" : "text-black"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-accentBlue hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-accentBlue active:text-accentBlue`}
              >
                <GoHomeFill size={24} /> Dasboard
              </Link>
              <Link
                href="/admin/forms"
                prefetch
                className={`${pathName === "/admin/forms" ? "text-accentBlue -translate-y-2 translate-x-2" : "text-black"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-accentBlue hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-accentBlue active:text-accentBlue`}
              >
                <MdReceiptLong size={24} /> Forms
              </Link>
              <Link
                href="/admin/membership"
                prefetch
                className={`${pathName === "/admin/membership" ? "text-accentBlue -translate-y-2 translate-x-2" : "text-black"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-accentBlue hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-accentBlue active:text-accentBlue md:text-base`}
                >
                <FaAward size={24} /> Membership Forms
              </Link>
              <Link
                href="/admin/contact"
                prefetch
                className={`${pathName === "/admin/contact" ? "text-accentBlue -translate-y-2 translate-x-2" : "text-black"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-accentBlue hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-accentBlue active:text-accentBlue md:text-base`}
                >
                <IoMdContact size={24} /> Contact
              </Link>
            </div>
            <button
              onClick={() => signOut()}
              className={`absolute bottom-20 flex items-center gap-x-3 rounded-md p-4 text-sm text-black duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-accentBlue hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-accentBlue active:text-accentBlue`}
            >
              <LuLogOut size={24} /> Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Sidebar;
