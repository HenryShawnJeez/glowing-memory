//Import Needed Components
import getContactForms from "@/app/actions/getContactForm";
import AdminHeading from "@/components/AdminComponents/AdminHeading";
import ContactFormDetails from "@/components/AdminComponents/ContactFormDetails";

export const revalidate = 60

const page = async () => {
    const contactForms = await getContactForms()
    return ( 
        <main>
            <div className="px-4 py-4 lg:px-10">
                <AdminHeading route="home" coloredRoute="contact"/>
            </div>
            <div className="bg-bgWhite px-4 py-6 lg:px-10 h-screen">
                <ContactFormDetails forms={contactForms}/>
            </div>
        </main>
     );
}
 
export default page;