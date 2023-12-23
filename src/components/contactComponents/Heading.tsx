import Image from "next/image";

//Import Needed Images
import contactImg from "../../../public/contact.jpg";

const Heading = () => {
    return ( 
        <main>
            <Image src={contactImg} alt="Contact Us Image" className="w-full"/>
        </main>
     );
}
 
export default Heading;