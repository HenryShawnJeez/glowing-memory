
//Import Needed Components
import Benefit from "@/components/MembershipComponents/Benefit";
import Footer from "@/components/MembershipComponents/Footer";
import HeroSection from "@/components/MembershipComponents/HeroSection";
import MembershipForm from "@/components/MembershipComponents/MembershipForm";
import Testimonial from "@/components/MembershipComponents/Testimonial";

const page = () => {
    return ( 
        <main>
            <HeroSection />
            <MembershipForm />
            <Benefit />
            <Testimonial />
            <Footer />
        </main>
     );
}
 
export default page;