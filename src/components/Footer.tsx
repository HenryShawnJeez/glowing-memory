import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import bodyImg from "../../public/slider1-graphic1.png";
import logo from "../../public/logo.png";
import securePay from "../../public/securepayLogo.png";
import binanceLogo from "../../public/BinanceLgo.png";

//Import Needed Icons
import { TbBrandTelegram } from "react-icons/tb";
import { SiInstagram } from "react-icons/si";
import { RiTiktokLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
    return ( 
        <main className="bg-[#440892]">
            <Image src={bodyImg} alt="smartchain" className="mx-auto mt-10"/>
            <div className="bg-[#2D2727] flex flex-col gap-y-3 px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex gap-x-3 items-center">
                    <Image src={logo} alt="smartchain logo" className="w-12 sm:w-12 md:w-14"/>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-2">Carlive Chain</p>
                </div>
                <div className="flex gap-x-5 items-end mt-4">
                    <Image src={securePay} alt="Secure Pay Logo" className="w-20 sm:w-24 md:w-28 lg:w-32"/>
                    <Image src={binanceLogo} alt="Binance Logo" className="w-14 sm:w-16 md:w-20 lg:w-24 mb-3 lg:mb-5"/>
                </div>
                
                <Link href="/about" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">About</Link>
                <Link href="/contact" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Contact</Link>
                <Link href="/brand" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Brand</Link>
                <Link href="/blog" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Blog</Link>
                <Link href="/community" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Community</Link>
                <Link href="/litepaper" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Litepaper</Link>
                <Link href="/terms-of-service" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Terms Of Service</Link>
            </div>
            <div className="flex gap-x-3 justify-center py-10">
                <div className="h-8 w-8 rounded-[50%] border border-black flex items-center justify-center transform group hover:border-accentBlue hover:-translate-y-2 duration-500">
                    <Link href="https://t.me/Airdropiovswapbonus" target="_blank"><TbBrandTelegram className="text-black group-hover:text-accentBlue duration-500" size={16}/></Link>
                </div>
                <div className="h-8 w-8 rounded-[50%] border border-black flex items-center justify-center transform group hover:border-accentBlue hover:-translate-y-2 duration-500">
                    <Link href="https://instagram.com/iovtokenswapteam?igshid=OGY3MTU3OGY1Mw==" target="_blank"><SiInstagram className="text-black group-hover:text-accentBlue duration-500" size={16}/></Link>
                </div>
                <div className="h-8 w-8 rounded-[50%] border border-black flex items-center justify-center transform group hover:border-accentBlue hover:-translate-y-2 duration-500">
                    <Link href="https://www.tiktok.com/@carlive.chain.iov?_r=1&_d=e72054afi51f1j&sec_uid=MS4wLjABAAAAIO43Qw-u_CyUeiE1SjEzdHMzvlb4W17Z3YwW8hJxKRxygyqZFCe4_jAkEeKhyYyg&share_author_id=7214234522030785542&sharer_language=en&source=h5_m&u_code=e74c8415idc8g6&timestamp=1699560788&user_id=7214234522030785542&sec_user_id=MS4wLjABAAAAIO43Qw-u_CyUeiE1SjEzdHMzvlb4W17Z3YwW8hJxKRxygyqZFCe4_jAkEeKhyYyg&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7278156595362989829&share_link_id=dbf14740-77f8-4d80-837d-f05df66bd168&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5" target="_blank"><RiTiktokLine className="text-black group-hover:text-accentBlue duration-500" size={16}/></Link>
                </div>
                <div className="h-8 w-8 rounded-[50%] border border-black flex items-center justify-center transform group hover:border-accentBlue hover:-translate-y-2 duration-500">
                    <Link href="https://www.facebook.com/profile.php?id=61551019777502" target="_blank"><SlSocialFacebook className="text-black group-hover:text-accentBlue duration-500" size={16}/></Link>
                </div>
            </div>
        </main>
     );
}
 
export default Footer;