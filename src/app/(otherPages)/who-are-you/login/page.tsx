"use client";
import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


//Import Icons
import { MdEmail } from "react-icons/md";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaMehRollingEyes } from "react-icons/fa";


interface InitialStateProps {
  email: string,
  password: string,
}
const initialState:InitialStateProps = {
  email: "",
  password: ""
}
export default function Login() {
  const router = useRouter();
  //Loading state for the form
  const [loading, setLoading] = useState<boolean>(false)
  //Input State, For the Password
  const [inputType, setInputType] = useState<"text" | "password">("password");
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
  };
 //For the Submit Function
 const onSubmit = async (event: FormEvent) => {
  event.preventDefault();
  setLoading(true);
  
  try {
    const callback = await signIn("credentials", {
      ...state,
      redirect: false
    });

    if (callback?.ok && !callback?.error) {
      setLoading(false);
      toast.success("Welcome");
      handleFormReset();
      router.push("/admin/dashboard");
      
    } else if (callback?.error) {
      setLoading(false);
      handleFormReset();
      toast.error("Wrong Email or Password");
    }
  } catch (error) {
    console.error(error);
    setLoading(false);
    handleFormReset();
    toast.error("An error occurred during sign-in");
  }
};

  return (
    <main className="fixed h-screen w-full top-0 left-0 flex items-center justify-center">
      <div className="mt-14 p-5 md:py-10 md:px-10 xl:px-20 flex flex-col items-center md:items-start">
        <div className="flex items-baseline gap-x-0.5">
          <h1 className="font-semibold mt-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
            Login To Your Account
          </h1>
          <div className="h-2 w-2 rounded-[50%] bg-accentBlue"></div>
        </div>
        <p className="text-sm md:text-base mt-4 text-[#595B63]">
          Not A Member?{" "}
          <span className="text-accentBlue cursor-pointer hover:text-[#EDEDEE] duration-500">
            <Link href="/who-are-you/create">Create Account</Link>
          </span>
        </p>
          <form className="mt-10 w-full" onSubmit={onSubmit}>
              
            <div className="relative mt-4 w-[20rem] md:w-[30rem]">
              <input
                className="text-sm focus:border-2 focus:border-accentBlue bg-[#595B63] px-2 py-3 w-full outline-none rounded-xl placeholder:text-xs"
                type="email"
                name="email"
                id="email"
                value={state.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <MdEmail size={14} className="absolute top-4 right-2" />
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
                {loading ? "Submitting..." : "Login"}
              </button>
            </div>
          </form>
          </div>
    </main>
  );
}
