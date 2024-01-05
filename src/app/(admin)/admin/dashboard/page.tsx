//Import Needed Components
import getContactForms from "@/app/actions/getContactForm";
import getDepositForms from "@/app/actions/getDepositForm";
import getForms from "@/app/actions/getForm1";
import AdminHeading from "@/components/AdminComponents/AdminHeading";
import Summary from "@/components/AdminComponents/Summary";
import LastPackages from "@/components/AdminComponents/Transaction";

export const revalidate = 60

const page = async () => {
   const firstForms = await getForms()
   const depositForms = await getDepositForms()
   const contactForms = await getContactForms()
    return ( 
        <main>
         <div className="px-4 py-4 lg:px-10">
            <AdminHeading route="home" coloredRoute="dashboard"/>
         </div>
          <div className="px-4 py-6 lg:px-10 h-screen">
            <Summary firstFormLength={firstForms.length} depositFormLength={depositForms.length} contactFormLength={contactForms.length}/>
            <LastPackages forms={firstForms}/>
           </div> 
        </main>
     );
}
 
export default page;