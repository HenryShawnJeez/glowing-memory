//Import Needed Components
import AdminHeading from "@/components/AdminComponents/AdminHeading";
import ContactFormDetails from "@/components/AdminComponents/ContactFormDetails";
const page = () => {
    return ( 
        <main>
            <div className="px-4 py-4 lg:px-10">
                <AdminHeading route="home" coloredRoute="contact"/>
            </div>
            <div className="bg-bgWhite px-4 py-6 lg:px-10 h-screen">
                <ContactFormDetails />
            </div>
        </main>
     );
}
 
export default page;