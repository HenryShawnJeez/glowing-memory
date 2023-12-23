const FirstForms = ({ forms }: { forms: any }) => {

  return (
    <main className="mt-4 flex gap-5 flex-wrap w-full">
      {(!forms || forms.length === 0) && (
        <p className="text-sm md:text-base">There is no first form yet.</p>
      )}
      {(forms && forms.length !== 0)  && 
            forms.map((form: any) => (
              <div key={form.id} className="min-w-[18rem] w-1/4 p-4 h-64 bg-accentBlue rounded-md overflow-auto special">
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="text-xs md:text-sm">Email</p>
                  <p className="text-sm md:text-base font-bold">{form.email}</p>
                </div>
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="text-xs md:text-sm">Payout Quantity</p>
                  <p className="text-sm md:text-base font-bold">
                    {form.payoutQuantity}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="text-xs md:text-sm">IOV Wallet Address</p>
                  <p className="text-sm md:text-base font-bold">
                    {form.iovWalletAddress}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="text-xs md:text-sm">IOV Claim Wallet</p>
                  <p className="text-sm md:text-base font-bold">
                    {form.iovClaimWallet}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="text-xs md:text-sm">Royal Membership Card</p>
                  <p className="text-sm md:text-base font-bold">
                    {form.royalMemberShipCard.length === 0
                      ? "No Was Card Entered"
                      : form.royalMemberShipCard}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="text-xs md:text-sm">Ethereum Address</p>
                  <p className="text-sm md:text-base font-bold">
                    {form.ethereumAddress}
                  </p>
                </div>
              </div>
            ))}
    </main>
  );
};

export default FirstForms;
