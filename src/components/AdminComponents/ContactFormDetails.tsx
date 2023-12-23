const ContactFormDetails = ({ forms }: { forms: any }) => {
  return (
    <main className="mt-10 flex flex-wrap gap-5">
      {(!forms || forms.length === 0) && (
        <div className="w-full">
          <p className="text-xl font-bold text-center">
            No Contact Us Request Yet
          </p>
        </div>
      )}
      {forms &&
        forms.length !== 0 &&
        forms.map((form: any) => (
          <div
            key={form.id}
            className="min-w-[18rem] w-1/4 p-4 h-64 bg-accentBlue rounded-md overflow-auto special"
          >
            <div className="flex flex-col gap-y-1 mt-1">
              <p className="text-xs md:text-sm">First Name</p>
              <p className="text-sm md:text-base font-bold">{form.firstName}</p>
            </div>
            <div className="flex flex-col gap-y-1 mt-1">
              <p className="text-xs md:text-sm">Last Name</p>
              <p className="text-sm md:text-base font-bold">{form.lastName}</p>
            </div>
            <div className="flex flex-col gap-y-1 mt-1">
              <p className="text-xs md:text-sm">Email</p>
              <p className="text-sm md:text-base font-bold">{form.email}</p>
            </div>
            <div className="flex flex-col gap-y-1 mt-1">
              <p className="text-xs md:text-sm">Phone Number</p>
              <p className="text-sm md:text-base font-bold">{form.phone}</p>
            </div>
            <div className="flex flex-col gap-y-1 mt-1">
              <p className="text-xs md:text-sm">Message</p>
              <p className="text-sm md:text-base font-bold">{form.message}</p>
            </div>
          </div>
        ))}
    </main>
  );
};

export default ContactFormDetails;
