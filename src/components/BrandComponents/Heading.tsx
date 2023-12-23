import Image from "next/image";

//Import Needed Images
import brandImg from "../../../public/brand.jpg";

const Heading = () => {
    return ( 
        <main>
            <Image src={brandImg} alt="Contact Us Image" className="w-full"/>
        </main>
     );
}
 
export default Heading;