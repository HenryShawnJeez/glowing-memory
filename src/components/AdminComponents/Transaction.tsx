"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
//Import Needed Icons
import { AiOutlineForm } from "react-icons/ai";

const Transaction = (forms: any) => {
    const router = useRouter()
  return (
    <main className="mt-10 overflow-x-auto special text-textWhite">
      <div className="flex justify-between w-full min-w-[40rem]">
        <p className="text-lg lg:text-xl font-bold">Ongoing Forms</p>
        <p className="">Your First Forms</p>
      </div>

      {forms.length === 0 && (
        <div className="mt-10 w-full min-w-[40rem]">
          <p className="text-center text-xl font-bold">No Form Yet</p>
        </div>
      )}
      {forms.length !== 0 && (
        <div className="mt-10 w-full min-w-[40rem]">
          {forms?.forms &&
            forms.forms.map((form: any) => (
              <div
                key={form.id}
                className="flex justify-between items-center mt-4 border-b border-gray-400 py-2 cursor-pointer" onClick={() => router.push(`/admin/forms/${form.id}`)}
              >
                <AiOutlineForm className="text-orange" size={30} />
                <p className="text-base md:text-lg lg:text-xl font-bold">{form.email}</p>
                <p className="text-base md:text-lg lg:text-xl font-bold">
                  {form.payoutQuantity}
                </p>
                <p className="text-base md:text-lg lg:text-xl font-bold">
                  {form.iovWalletAddress}
                </p>
                <p className="text-base md:text-lg lg:text-xl font-bold">
                  {form.iovClaimWallet}
                </p>
              </div>
            ))}
        </div>
      )}
      <div className="flex justify-end my-10">
        <Link
          href="/admin/orders"
          className="p-3 bg-accentBlue text-white rounded-md font-semibold hover:bg-lightBlue duration-500"
        >
          Forms Page
        </Link>
      </div>
    </main>
  );
};

export default Transaction;
