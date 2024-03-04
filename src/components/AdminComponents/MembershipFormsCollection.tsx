import { formatDate } from "@/lib/dateUtils";
import { formatDateOnly } from "@/lib/dateTimeUtils";

const MembershipFormsCollection = ({forms}: any) => {
    return ( 
        <main className="text-xs md:text-sm xl:text-base mt-10 text-white">
            <p className="text-lg md:text-xl xl:text-2xl text-medium">All Membership Forms</p>
            <div className="mt-10 flex flex-wrap gap-5 justify-center overflow-y-auto special">
            {forms && forms.map((form: any) => ( 
                <div key={form.id} className="min-w-[15rem] w-[20rem] h-52 flex flex-col gap-y-1 bg-white text-black rounded-md p-2 overflow-y-auto special">
                    <div className="flex flex-col gap-y-0.5">
                    <div className="flex flex-col gap-y-0.5">
                        <p className="font-semibold">Full Name:</p>
                        <p className="font-normal break-words">{form.fullName}</p>
                    </div>
                        <p className="font-semibold">Email:</p>
                        <p className="font-normal break-words">{form.email}</p>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <p className="font-semibold">Date of Birth:</p>
                        <p className="font-normal break-words">{formatDateOnly(form.dateOfBirth)}</p>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <p className="font-semibold">Country:</p>
                        <p className="font-normal break-words">{form.country}</p>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <p className="font-semibold">City:</p>
                        <p className="font-normal break-words">{form.city}</p>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <p className="font-semibold">Mobile Number:</p>
                        <p className="font-normal break-words">{form.mobileNumber}</p>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <p className="font-semibold">Occupation:</p>
                        <p className="font-normal break-words">{form.occupation}</p>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <p className="font-semibold">Form filled at:</p>
                        <p className="font-normal break-words">{formatDate(form.createdAt)}.</p>
                    </div>
                </div>
            ))}      
            </div>
        </main>
     );
}
 
export default MembershipFormsCollection;