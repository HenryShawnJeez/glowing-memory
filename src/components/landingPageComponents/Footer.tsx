import Link from "next/link";
//Import Needed Icons
import { IoIosArrowDropup } from "react-icons/io";
import { TbBrandTelegram } from "react-icons/tb";
import { SiInstagram } from "react-icons/si";
import { RiTiktokLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { FaAward } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="my-10 px-4 sm:px-6 lg:px-8">
      <div className="border-b border-slate-700 relative">
        <div className="flex gap-x-1 items-center py-2">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            About Carlive Chain
          </h1>
          <IoIosArrowDropup className="text-textBlue" size={20} />
        </div>
        <div className="w-[8rem] border-b-4 border-accentBlue absolute bottom-0 left-0"></div>
      </div>
      <div className="my-8 text-xs md:text-sm text-textBlue">
        <p>
          CarLive Chain is an application that uses blockchain technology in the
          field of automotive social network.{" "}
        </p>
      </div>
      <div className="flex gap-x-2 flex-wrap">
        <div className="flex gap-x-1 mt-4 border border-slate-700 w-28 items-center justify-center py-2 font-bold hover:bg-bgBlack hover:bg-opacity-40 duration-500">
          <SlSocialFacebook className="text-textBlue" />
          <Link href="https://www.facebook.com/profile.php?id=61551019777502" target="_blank">
            Facebook
          </Link>
        </div>
        <div className="flex gap-x-1 mt-4 border border-slate-700 w-28 items-center justify-center py-2 font-bold hover:bg-bgBlack hover:bg-opacity-40 duration-500">
          <TbBrandTelegram className="text-textBlue" />
          <Link href="https://t.me/Airdropiovswapbonus" target="_blank">
            Telegram
          </Link>
        </div>
        <div className="flex gap-x-1 mt-4 border border-slate-700 w-28 items-center justify-center py-2 font-bold hover:bg-bgBlack hover:bg-opacity-40 duration-500">
          <SiInstagram className="text-textBlue" />
          <Link
            href="https://instagram.com/iovtokenswapteam?igshid=OGY3MTU3OGY1Mw=="
            target="_blank"
          >
            Instagram
          </Link>
        </div>
        <div className="flex gap-x-1 mt-4 border border-slate-700 w-28 items-center justify-center py-2 font-bold hover:bg-bgBlack hover:bg-opacity-40 duration-500">
          <RiTiktokLine className="text-textBlue" />
          <Link
            href="https://www.tiktok.com/@carlive.chain.iov?_r=1&_d=e72054afi51f1j&sec_uid=MS4wLjABAAAAIO43Qw-u_CyUeiE1SjEzdHMzvlb4W17Z3YwW8hJxKRxygyqZFCe4_jAkEeKhyYyg&share_author_id=7214234522030785542&sharer_language=en&source=h5_m&u_code=e74c8415idc8g6&timestamp=1699560788&user_id=7214234522030785542&sec_user_id=MS4wLjABAAAAIO43Qw-u_CyUeiE1SjEzdHMzvlb4W17Z3YwW8hJxKRxygyqZFCe4_jAkEeKhyYyg&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7278156595362989829&share_link_id=dbf14740-77f8-4d80-837d-f05df66bd168&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5"
            target="_blank"
          >
            Tiktok
          </Link>
        </div>
        <div className="flex gap-x-1 mt-4 border border-slate-700 w-60 items-center justify-center py-2 font-bold hover:bg-bgBlack hover:bg-opacity-40 duration-500">
            <FaAward className="text-textBlue"/>
            <Link href="/membership" target="_blank">Royal Membership?</Link>
        </div>
      </div>
    </main>
  );
};

export default Footer;
