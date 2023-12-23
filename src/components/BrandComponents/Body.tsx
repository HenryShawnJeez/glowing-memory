//Import needed Icons
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const Body = () => {
  return (
    <main className="py-2 px-4 sm:px-6 lg:px-8 mt-10 text-black">
      <p className="text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl">
        Brand & Logos
      </p>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-10 font-bold text-center">
        What you may not do.
      </p>
      <div className="text-xs sm:text-sm md:text-base mt-10">
        <p>
          While we strongly believe in and follow the open source ethos,
          <span className="font-bold">
            protecting the Carlive Chain swap brand is extremely important for
            our users&apos; security,
          </span>{" "}
          so that users know what is a genuine product/endorsement and what
          isn&apos;t.
        </p>
        <p className="mt-4">
          Here are a few examples of forbidden uses of our Brand Assets:
        </p>
        <ul className="list-disc mt-4 flex flex-col px-8 gap-y-2">
          <li>
            Don&apos;t use our Brand Assets in your products&apos; name, logo,
            NFTs, etc.{" "}
          </li>
          <li>
            For example, making an app called &quot;CarliveChain Swap&qout;{" "}
          </li>
          <li>
            Don&apos;t use the CarliveChain Swap logo in whole or in part as
            part of your products&apos; logos, marketing material, website, or
            other.
          </li>
          <li>
            Logos with a strong resemblence to the CarliveChain Swap are also
            forbidden.
          </li>
          <li>
            Don&apos;t use our Brand Assets to create digital or physcial
            products for sale, including but not limited to
          </li>
          <li>Merchandise (&quot;Swag&quot;)</li>
          <li>NFTs</li>
          <li>Other products</li>
          <li>
            Use your common sense and creativity. If you want to make something
            relating to the PancakeSwap ecosystem, make it your own. Have fun
            making a unique brand that&apos;s clearly yours -- if your product
            is strong, you won&apos;t need to rely on remixing
            PancakeSwap&apos;s brand.
          </li>
          <li>
            Don&apos;t create derivative names that imply official endorsement
            For example, don&apos;t make a social media group called
            &quot;CarliveChain Swap&quot; - this sounds official.
            &quot;CarliveChain Swap of Italy&quot; may be permitted.
          </li>
          <li>
            Don&apos;t change or adapt our Brand Assets in any way Use the logos and
            other assets exactly as provided. Do not change the colors,
            reassemble, abbreviate, or change these assets in any way.
          </li>
        </ul>
        <p className="font-bold mt-4">The following PancakeSwap &quot;Brand Assets&quot; are copyrighted material, and you may only use them in accordance with the policy detailed below:</p>
        <ul className="list-decimal mt-4 flex flex-col px-8 gap-y-2">
            <li>The PancakeSwap and CAKE logos, wordmark, icon</li>
            <li>The PancakeSwap name</li>
            <li>Other visual assets produced by PancakeSwap including but not limited to illustrations and 3d models</li>
        </ul>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-10 font-bold text-center"> What you may do</p>
        <p className="mt-4">You may use CarliveChain Swap&apos;s Brand Assets when you are:</p>
        <div className="flex gap-x-2 mt-4">
            <BsFillHandThumbsUpFill className="text-yellow-500 shrink-0" size={20}/>
            <p>Referring to our products and services</p>
        </div>
        <div className="flex gap-x-2 mt-4">
            <BsFillHandThumbsUpFill className="text-yellow-500 shrink-0" size={20}/>
            <p>Linking to our official site or products, such as  &quot;Trade our token on CarliveChain Swap&quot;</p>
        </div>
        <div className="flex gap-x-2 mt-4">
            <BsFillHandThumbsUpFill className="text-yellow-500 shrink-0" size={20}/>
            <p>Announcing an official partnership, but only if you have official approval by a qualified member of the CarliveChain Swap team.</p>
        </div>
        <p className="mt-4 font-bold">For information on other uses of our Brand Assets, please reach out on any of our communication channels.</p>
      </div>
    </main>
  );
};

export default Body;
