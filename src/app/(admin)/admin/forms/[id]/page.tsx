import getIndividualForm from "@/app/actions/getIndividualForm";

export default async function FormDetail({
  params,
}: {
  params: { id: string };
}) {
  const formId = params.id;

  const formDetailsArray = await getIndividualForm(formId);
  const theFormDetails = formDetailsArray[0];
  return (
    <main className="h-screen text-white">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-20">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-4 text-center">
          Form Details
        </p>
        <div className="flex flex-col gap-y-3 mt-10">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">
            Email
            <span className="text-accentBlue text-right">
              {theFormDetails?.email}
            </span>
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">
            Payout Quantity
            <span className="text-accentBlue text-right">
              {theFormDetails?.payoutQuantity}
            </span>
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">
            IOV Wallet Address
            <span className="text-accentBlue text-right">
              {theFormDetails?.iovWalletAddress}
            </span>
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">
            IOV Claim Wallet
            <span className="text-accentBlue text-right">
              {theFormDetails?.iovClaimWallet}
            </span>
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">
            Royal Membership Card
            <span className="text-accentBlue text-right">
              {theFormDetails?.royalMemberShipCard ?? "No Card"}
            </span>
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">
            Ethereum Address
            <span className="text-accentBlue text-right">
              {theFormDetails.ethereumAddress}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
