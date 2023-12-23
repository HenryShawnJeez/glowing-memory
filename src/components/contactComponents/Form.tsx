"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "sonner";
import { makeApiRequest } from "@/lib/apiUtils";

type InitialProps = {
  firstName: string;
  lastName: string;
  email: string;
  telPhone: string;
  message: string;
};
const initialState: InitialProps = {
  firstName: "",
  lastName: "",
  email: "",
  telPhone: "",
  message: "",
};
const Form = () => {
  const router = useRouter();
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  //Function for the State Changing
  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  //Function for the Form Reset
  const handleFormReset = () => {
    setState(initialState);
  };
  //On Submit Function
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true)
    makeApiRequest("/contactForm", "post", state, {
      onSuccess: () => {
        //Handle Success
        handleFormReset()
        setLoading(false);
        toast.success("Thanks for reaching out! We've received your message and will be in touch shortly.");
        router.refresh();
      },
      onError: (error : any) => {
        //Handle Error
        handleFormReset()
        setLoading(false);
        if (error) {
          if (error === "Missing Fields") {
            toast.error("Please Fill In All The Details");
          } else {
            toast.error("Your Response Wasn't Submitted, Please Try Again Later.");
          }
        }
      }
    })
  };
  return (
    <main className="py-2 px-4 sm:px-6 lg:px-8 mt-10 text-black">
      <p className="text-center font-bold  text-sm sm:text-base md:text-lg lg:text-xl">
        Contact us
      </p>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-10 text-center">
        Drop us a line with any questions, inquiries or business proposals.
      </p>
      <form className="mt-10" onSubmit={onSubmit}>
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="firstName"
            className="text-xs sm:text-sm md:text-base font-medium cursor-pointer"
          >
            First Name
          </label>
          <input
            required
            onChange={handleChange}
            value={state.firstName}
            type="text"
            name="firstName"
            id="firstName"
            className="border border-black rounded-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label
            htmlFor="lastName"
            className="text-xs sm:text-sm md:text-base font-medium cursor-pointer"
          >
            Last Name
          </label>
          <input
            required
            onChange={handleChange}
            value={state.lastName}
            type="text"
            name="lastName"
            id="lastName"
            className="border border-black rounded-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label
            htmlFor="email"
            className="text-xs sm:text-sm md:text-base font-medium cursor-pointer"
          >
            Email
          </label>
          <input
            required
            onChange={handleChange}
            value={state.email}
            type="email"
            name="email"
            id="email"
            className="border border-black rounded-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label
            htmlFor="telPhone"
            className="text-xs sm:text-sm md:text-base font-medium cursor-pointer"
          >
            Phone
          </label>
          <input
            required
            onChange={handleChange}
            value={state.telPhone}
            type="tel"
            name="telPhone"
            id="telPhone"
            className="border border-black rounded-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label
            htmlFor="message"
            className="text-xs sm:text-sm md:text-base font-medium cursor-pointer"
          >
            Leave us a message
          </label>
          <textarea
            required
            onChange={handleChange}
            value={state.message}
            name="message"
            className="resize-none border border-black rounded-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-3 focus:outline-none"
          ></textarea>
        </div>
        <input
          type="submit"
          value={loading ? "Submitting" : "Submit"}
          className="bg-black w-full py-3 md:py-4 text-center hover:bg-gray-900 duration-500 mt-8 rounded-xl text-white cursor-pointer"
        />
      </form>
    </main>
  );
};

export default Form;
