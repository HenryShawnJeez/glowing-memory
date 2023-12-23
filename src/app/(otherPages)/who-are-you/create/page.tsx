"use client";
import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { makeApiRequest } from "@/lib/apiUtils";
import { useRouter } from "next/navigation";

//Import Icons
import { FaRegAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaMehRollingEyes } from "react-icons/fa";
import { GoPasskeyFill } from "react-icons/go";


type InitialStateProps = {
  name : string,
  email: string,
  password: string,
}
const initialState:InitialStateProps = {
  name: "",
  email: "",
  password: ""
}
export default function Register() {
  const router = useRouter();
  //State for the form loading
  const [loading, setLoading] = useState<boolean>(false)
  //Input State, For the Password
  const [inputType, setInputType] = useState<"text" | "password">("password");
  //State For The PassPhrase
  const [passPhrase, setPassPhrase] = useState<string>("");
  //State for the inputs
  const [state, setState] = useState(initialState)
  //Ref Hook for the Password field
  const inputRef = useRef<HTMLInputElement | null>(null);
  //Function for the Input type toggle
  const toggleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };
  //Function for the State Changing
  const handleChange = (event: any) => {
      setState({...state, [event.target.name]: event.target.value})
  }
  //Function for the Form Reset
  const handleFormReset = () => {
    setState(initialState);
    setPassPhrase('')
  };
  //For the Function Submit
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true)
    const formData = state;

    if (passPhrase !== process.env.NEXT_PUBLIC_ACCOUNT_CREATION_PASSPHRASE) {
      toast.error("LMAO, you are playing, STOP PLAYING!!!");
      handleFormReset();
      return;
    }
    makeApiRequest("/register", "post", formData, {
      onSuccess: () => {
        // Handle success
        handleFormReset();
        setLoading(false)
        toast.success("Account was created successfully.");
        router.push("/admin/dashboard");
      },
      onError: (error: any) => {
        // Handle error
        handleFormReset();
        setLoading(false)
        if (error) {
          if (error === "Email already exists") {
            toast.error("Email Already Exists");
          } else if (error === "Missing Fields") {
            toast.error("Please Fill In All The Details");
          } else {
            toast.error("Account wasn't created. Please try again.");
          }
        }
      },
    });
  };

  return (
    <main className="fixed h-screen w-full top-0 left-0 flex items-center justify-center">
      <div className="mt-14 p-5 md:py-10 md:px-10 xl:px-20 flex flex-col items-center md:items-start">
        <div className="flex items-baseline gap-x-0.5">
          <h1 className="font-semibold mt-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
            Create Your Account
          </h1>
          <div className="h-2 w-2 rounded-[50%] bg-accentBlue"></div>
        </div>
        <p className="text-sm md:text-base mt-4 text-[#595B63]">
          Already A Member?{" "}
          <span className="text-accentBlue cursor-pointer hover:text-[#EDEDEE] duration-500">
            <Link href="/who-are-you/login">Log In</Link>
          </span>
        </p>
          <form className="mt-10 w-full" onSubmit={onSubmit}>
              <div className="relative mt-4 w-[20rem] md:w-[30rem]">
                <input
                  className="text-sm focus:border-2 focus:border-accentBlue w-full bg-[#595B63] px-2 py-3 outline-none rounded-xl placeholder:text-xs"
                  type="text"
                  name="name"
                  value={state.name}
                  id="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                />
                <FaRegAddressCard
                  size={14}
                  className="absolute top-4 right-2"
                />
              </div>
            <div className="relative mt-4 w-[20rem] md:w-[30rem]">
              <input
                className="text-sm focus:border-2 focus:border-accentBlue bg-[#595B63] px-2 py-3 w-full outline-none rounded-xl placeholder:text-xs"
                type="email"
                name="email"
                value={state.email}
                id="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <MdEmail size={14} className="absolute top-4 right-2" />
            </div>
            <div className="relative mt-4 w-[20rem] md:w-[30rem]">
                <input
                  className="text-sm focus:border-2 focus:border-accentBlue w-full bg-[#595B63] px-2 py-3 outline-none rounded-xl placeholder:text-xs"
                  type="text"
                  name="passPhrase"
                  id="passPhrase"
                  value={passPhrase}
                  placeholder="Enter The Passphrase"
                  onChange={(event: any) => setPassPhrase(event.target.value)}
                />
                <GoPasskeyFill
                  size={14}
                  className="absolute top-4 right-2"
                />
              </div>
            <div className="relative mt-4 w-[20rem] md:w-[30rem]">
              <input
                ref={inputRef}
                className="text-sm focus:border-2 focus:border-accentBlue bg-[#595B63] px-2 py-3 w-full outline-none rounded-xl placeholder:text-xs"
                type={inputType}
                name="password"
                id="password"
                value={state.password}
                placeholder="Password"
                onChange={handleChange}
              />
              <BsEmojiHeartEyesFill
                size={14}
                className={`${
                  inputType === "text" ? "hidden" : ""
                } cursor-pointer absolute top-4 right-2`}
                onClick={toggleInputType}
              />
              <FaMehRollingEyes
                size={14}
                className={`${
                  inputType === "password" ? "hidden" : ""
                } cursor-pointer absolute top-4 right-2`}
                onClick={toggleInputType}
              />
            </div>
            <div className="flex w-[20rem] md:w-[30rem] mt-8 justify-between">
              <button
                className="w-full py-4 text-center text-xs md:text-sm rounded-3xl bg-accentBlue hover:text-accentBlue hover:bg-[#EDEDEE] duration-500 hover:font-semibold"
                type="submit"
              >
                {loading ? "Creating" : "Create Account"}
              </button>
            </div>
          </form>
          </div>
    </main>
  );
}
