//Import Needed Components
import AdminHeading from "@/components/AdminComponents/AdminHeading";
import FirstForms from "@/components/AdminComponents/FirstForms";
import DepositForm from "@/components/AdminComponents/DepositForm";
import getDepositForms from "@/app/actions/getDepositForm";
import getForms from "@/app/actions/getForm1";

export const revalidate = 60

const page = async () => {
   const depositForms = await getDepositForms()
   const firstForms = await getForms()

    return ( 
        <main>
           <div className="px-4 py-4 lg:px-10">
            <AdminHeading route="home" coloredRoute="forms"/>
         </div> 
         <div className="px-4 py-6 lg:px-10 h-screen overflow-auto special">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-textWhite">All First Forms</p>
            <FirstForms forms={firstForms}/>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-textWhite mt-4">All Deposit Forms</p>
            <DepositForm forms={depositForms}/>
         </div>
        </main>
     );
}
 
export default page;