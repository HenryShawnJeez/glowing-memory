const DepositForm = ({ forms }: { forms: any }) => {
    return (
      <main className="mt-4 flex gap-5 flex-wrap">
        {(!forms || forms.length === 0)  && (
          <p className="text-sm md:text-base text-textWhite">There is no deposit form yet.</p>
        )}
        {(forms && forms.length !== 0)  && 
            forms.map((form: any) => (
              <div key={form.id} className="min-w-[18rem] w-1/4 p-4 h-64 bg-red-400 rounded-md overflow-auto special">
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="text-xs md:text-sm">Email</p>
                  <p className="text-sm md:text-base font-bold">{form.email}</p>
                </div>
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="text-xs md:text-sm">Chosen ETH</p>
                  <p className="text-sm md:text-base font-bold">{form.chosenETH}</p>
                </div>
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="text-xs md:text-sm">Chosen IOV Balance</p>
                  <p className="text-sm md:text-base font-bold">{form.chosenIOVBalance}</p>
                </div>
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="text-xs md:text-sm">Connected Address</p>
                  <p className="text-sm md:text-base font-bold">{form.connectedAddress}</p>
                </div>
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="text-xs md:text-sm">Transaction ID</p>
                  <p className="text-sm md:text-base font-bold">{form.transactionID}</p>
                </div>
              </div>
            ))}
      </main>
    );
  };
  
  export default DepositForm;
  