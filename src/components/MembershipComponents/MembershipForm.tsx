'use client'
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { makeApiRequest } from "@/lib/apiUtils";
import Image from "next/image";
import { useRouter } from "next/navigation";

//Import Needed Components
import Input from "../Input";

//Import Needed Images
import sample from "../../../public/card.jpg";

const MembershipForm = () => {
    const router = useRouter()
    //Collect form details
    const [fullName, setFullName] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [country, setCountry] = useState<string>("")
    const [occupation, setOccupation] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [mobileNumber, setMobileNumber] = useState<string>("")
    const [dateOfBirth, setDateOfBirth] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    //Loading State and form reset
    const [loading, setLoading] = useState<boolean>(false)
    const reset = () => {
        setFullName("")
        setCity("")
        setCountry("")
        setOccupation("")
        setEmail("")
        setMobileNumber("")
        setDateOfBirth("")
        setGender("")
    }
    //On Submit Function
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true)
        const formData = {fullName, city, country, occupation, email, mobileNumber, dateOfBirth, gender}
        console.log({formData})

        makeApiRequest("/membershipForm", "post", formData, {
            onSuccess: () => {
                //Handle Success
                setLoading(false);
                toast.success("Thanks for registering! We've received your message and will be in touch shortly.");
                reset()
                router.push("/payment")
              },
              onError: (error : any) => {
                //Handle Error
                setLoading(false);
                toast.error("Couldn't submit your details, please try again later.")
                reset()
              }
        })
    }
    return ( 
        <main className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-10 bg-white text-xs md:text-sm xl:text-base">
            <div className="w-[95%] sm:w-[85%] md:w-[75%] xl:w-[65%] mx-auto">
                <Image src={sample} alt="Membership Card Sample" className="mx-auto w-60 my-6"/>
                <p className=" font-semibold text-[#6300E2] uppercase text-center brygada">Royal Membership form</p>
                <form className="mt-10 flex flex-col gap-y-8" onSubmit={onSubmit}>
                    <Input type="text" placeholder="Enter your full name" label="Your Full Name" id="fullName" value={fullName} onChange={(e) => {setFullName(e.target.value)}}/>
                    <Input type="text" placeholder="Enter your city" label="Your City" id="city" value={city} onChange={(e) => {setCity(e.target.value)}}/>
                    <Input type="text" placeholder="Enter your country" label="Your Country" id="country" value={country} onChange={(e) => {setCountry(e.target.value)}}/>
                    <div className="flex flex-col gap-y-1 ">
                        <label className="cursor-pointer text-[#6300E2]" htmlFor="gender">
                            Your Gender
                        </label>
                        <select onChange={(e: any) => setGender(e.target.value)} required name="gender" id="gender" className="border text-black border-[#E6E7E8] bg-[#F0F0F0] px-2 xl:px-4 py-3 focus:border-black rounded-sm">
                            <option value="">Please choose an option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-y-1 ">
                        <label className="cursor-pointer text-[#6300E2]" htmlFor="date">
                            Your Date of Birth
                        </label>
                        <input required value={dateOfBirth} onChange={(e: any) => setDateOfBirth(e.target.value)} type="datetime-local" name="dateOfBirth" id="dateOfBirth" className="border text-black border-[#E6E7E8] bg-[#F0F0F0] px-2 xl:px-4 py-3 focus:border-black rounded-sm focus:outline-none"/>
                    </div>
                    <Input type="text" placeholder="Enter your Occupation" label="Your Occupation" id="occupation" value={occupation} onChange={(e) => {setOccupation(e.target.value)}}/>
                    <Input type="email" placeholder="Enter your Email" label="Your Email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <Input type="tel" placeholder="Enter your Mobile Number" label="Your Telephone Number" id="email" value={mobileNumber} onChange={(e) => {setMobileNumber(e.target.value)}}/>
                    <div className="flex flex-col gap-y-1 ">
                        <label className="cursor-pointer text-[#6300E2]" htmlFor="image">
                            Upload your Images
                        </label>
                        <input type="file" name="image" id="image" className="border text-black border-[#E6E7E8] bg-[#F0F0F0] px-2 xl:px-4 py-3 focus:border-black rounded-sm focus:outline-none"/>
                    </div>
                    <input type="submit" value={loading ? "SUBMITTING" : "SUBMIT"} className="rounded-md cursor-pointer bg-black py-3  font-semibold text-white border border-black hover:bg-inherit hover:text-black duration-300" />
                </form>
                <p className="text-black font-bold my-10">After submitting your application, you shall recieve a response in your email within 24 hours of your application.</p>
            </div>
            
        </main>
     );
}
 
export default MembershipForm;

// #FAFAFA #dddddd