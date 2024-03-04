"use client"
import Link from "next/link";

const Transaction = (forms: any) => {
  return (
    <main className="mt-10 text-textWhite bg-bgBlue text-xs md:text-sm xl:text-base">
      <div className="flex justify-between items-center">
        <p className="text-lg lg:text-xl font-bold">Ongoing Forms</p>
        <p className="">Your First Forms</p>
      </div>

      {forms.length === 0 && (
        <div className="mt-10 w-full">
          <p className="text-center text-xl font-medium">No Form Yet</p>
        </div>
      )}
      {forms.length !== 0 && (
        <div className="mt-10 w-full">
          {forms?.forms &&
            forms.forms.map((form: any) => (
              <Link
                key={form.id}
                className="flex justify-between gap-x-5 items-center mt-4 border-b border-gray-400 py-2 cursor-pointer overflow-x-auto special" href={`/admin/forms/${form.id}`}
              >
                <div>
                  <p className="text-base md:text-lg lg:text-xl font-medium">{form.email}</p>
                  <p className="text-base md:text-lg lg:text-xl font-medium">
                    {form.payoutQuantity}
                  </p>
                </div>
                <div>
                  <p className="text-base md:text-lg lg:text-xl font-medium">
                    {form.iovWalletAddress}
                  </p>
                  <p className="text-base md:text-lg lg:text-xl font-medium">
                    {form.iovClaimWallet}
                  </p>
                </div>
                
              </Link>
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
