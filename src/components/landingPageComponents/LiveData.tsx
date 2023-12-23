import Link from "next/link";
//Import needed Icons
import { SlInfo } from "react-icons/sl";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { IoMdArrowDropup } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const LiveData = () => {
  return (
    <main className="my-10 px-4 sm:px-6 lg:px-8">
      <p className="font-bold text-sm sm:text-base md:text-lg xl:text-xl">
        Carlive Chain Price Live Data
      </p>
      <div className="mt-6 flex justify-between gap-x-10 overflow-x-auto bar pb-4">
        <div className="w-1/3 min-w-[20rem]">
          <div className="flex gap-x-3 items-center">
            <p className="text-xs text-textBlue">24H RANGE</p>
            <SlInfo className="text-textBlue" size={12} />
          </div>
          <div className="bg-accentBlue h-1.5 rounded-md mt-2"></div>
          <IoMdArrowDropup
            className="relative left-1 text-accentBlue -mt-1"
            size={20}
          />
          <div className="flex justify-between -mt-2">
            <p className="text-xs sm:text-sm md:text-base font-bold">
              $0.000150
            </p>
            <p className="text-xs sm:text-sm md:text-base font-bold">
              $0.000150
            </p>
          </div>
          <div className="mt-4">
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue">Carlive Chain Price</p>
              <p className="font-bold">$0.000150</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue">Market Cap</p>
              <p className="font-black">-</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Diluted Market Cap <SlInfo size={12} />
              </p>
              <p className="font-black">-</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue">24H Volume</p>
              <p className="font-bold">$0</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue">Vol. / M. Cap Ratio</p>
              <p className="font-black">-</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue">Dominance</p>
              <p className="font-bold">0.00%</p>
            </div>
            <div className="py-2 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Volatility <SlInfo size={12} />
              </p>
              <p className="font-bold text-textGreen">0.00% (Very Low)</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 min-w-[20rem]">
          <div className="flex gap-x-3 items-center">
            <p className="text-xs text-textBlue">52W RANGE</p>
            <SlInfo className="text-textBlue" size={12} />
          </div>
          <div className="bg-accentBlue h-1.5 rounded-md mt-2"></div>
          <IoMdArrowDropup
            className="relative left-1 text-accentBlue -mt-1"
            size={20}
          />
          <div className="flex justify-between -mt-2">
            <p className="text-xs sm:text-sm md:text-base font-bold">
              $0.000150
            </p>
            <p className="text-xs sm:text-sm md:text-base font-bold">
              $0.000150
            </p>
          </div>
          <div className="mt-4">
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                ATH
                <SlInfo size={12} />
              </p>
              <p className="font-bold">$0.010034(-99%)</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                ATH Date
                <SlInfo size={12} />
              </p>
              <p className="font-bold">Aug 2, 2018</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                ATH
                <SlInfo size={12} />
              </p>
              <p className="font-bold">$0.000004465</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                ATH Date
                <SlInfo size={12} />
              </p>
              <p className="font-bold">Oct 13, 2021</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Cycle Low
                <SlInfo size={12} />
              </p>
              <p className="font-bold">$0.000004465</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Cycle High
                <SlInfo size={12} />
              </p>
              <p className="font-bold">$0.000318</p>
            </div>
            <div className="py-2 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Sentiment
                <SlInfo size={12} />
              </p>
              <p className="font-bold text-textRed">Bearish</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 min-w-[20rem]">
          <div className="flex gap-x-3 items-center">
            <p className="text-xs text-textBlue">ATH & ATL RANGE </p>
            <SlInfo className="text-textBlue" size={12} />
          </div>
          <div className="flex mt-2 w-full">
            <div className="bg-accentBlue h-1.5 w-[4%] rounded-l-md"></div>
            <div className="bg-bgBlack h-1.5 w-[96%] rounded-r-md"></div>
          </div>

          <IoMdArrowDropup
            className="relative left-1 text-accentBlue -mt-1"
            size={20}
          />
          <div className="flex justify-between -mt-2">
            <p className="text-xs sm:text-sm md:text-base font-bold">
              $0.000004465
            </p>
            <p className="text-xs sm:text-sm md:text-base font-bold">
              $0.010034
            </p>
          </div>
          <div className="mt-4">
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Circ. Supply <SlInfo size={12} className="text-textRed" />
              </p>
              <p className="font-black">-</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Total Supply <SlInfo size={12} />
              </p>
              <p className="font-black">-</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Max Supply <SlInfo size={12} />
              </p>
              <p className="font-black">-</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Supply Inflation <SlInfo size={12} />
              </p>
              <p className="font-black">-</p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Platform
                <SlInfo size={12} />
              </p>
              <p className="font-bold text-accentBlue hover:text-textWhite duration-500 underline">
                <Link href="https://coincodex.com/crypto/ethereum/" target="_blank">ETH</Link>
              </p>
            </div>
            <div className="py-2 border-b border-slate-700 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Release Date <SlInfo size={12} />
              </p>
              <p className="font-bold">Aug 1, 2018</p>
            </div>
            <div className="py-2 flex justify-between text-xs sm:text-sm md:text-base">
              <p className="text-textBlue flex gap-x-3 items-center">
                Fear & Greed Index <SlInfo size={12} />
              </p>
              <p className="font-bold">53 (Neutral)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 text-textBlue text-xs sm:text-sm md:text-base ">
        <p>
          Carlive Chain price today is $0.000150 with a 24-hour trading volume
          of $0.00, market cap of $0.00, and market dominance of 0.00%. The IOV
          price increased{" "}
          <span className="text-textGreen font-bold">0.00%</span> in the last 24
          hours.
        </p>
        <p className="mt-4">
          Carlive Chain reached its highest price on Aug 2, 2018 when it was
          trading at its all-time high of $0.010034, while Carlive Chain&apos;s
          lowest price was recorded on Oct 13, 2021 when it was trading at its
          all-time low of $0.000004465. The lowest price since it&apos;s ATH was
          $0.000004465 (cycle low). The highest IOV price since the last cycle
          low was $0.000318 (cycle high). The Carlive Chain{" "}
          <span className="text-textWhite">price prediction </span>
          sentiment is currently{" "}
          <span className="text-textRed font-bold"> bearish</span>, while Fear &
          Greed Index is showing 53 (Neutral).
        </p>
        <p className="mt-4">
          In terms of market cap, Carlive Chain is currently ranked #2363 in the{" "}
          <span className="text-textWhite">Ethereum (ERC20) Tokens </span>{" "}
          sector.
        </p>
      </div>
      <div className="border-b border-slate-700 mt-4 mb-8">
        <div className="flex justify-between overflow-x-auto bar">
          <div className="w-1/2 min-w-[24rem] text-textBlue pb-4">
            <p className="text-textWhite text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-4">
              Highlights
            </p>
            <div className="px-4 mt-2 flex flex-col gap-y-2">
              <p className="flex gap-x-1 items-center">
                <FaStar size={16} className="text-textGreen" />
                <span className="text-xs sm:text-sm md:text-base">
                  Price has increased by 0% in the last 1 year
                </span>
              </p>
              <p className="flex gap-x-1 items-center">
                <FaStar size={16} className="text-textGreen" />
                <span className="text-xs sm:text-sm md:text-base">
                  Outperformed 82% of the{" "}
                  <span className="decoration-dotted">
                    {" "}
                    top 100 crypto assets
                  </span>{" "}
                  in 1 year
                </span>
              </p>
              <p className="flex gap-x-1 items-center">
                <FaStar size={16} className="text-textGreen" />
                <span className="text-xs sm:text-sm md:text-base">
                  Outperformed Bitcoin and Ethereum
                </span>
              </p>
            </div>
          </div>
          <div className="w-1/2 min-w-[24rem] text-textBlue pb-4">
            <p className="text-textWhite text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-4">
              Risk Analysis
            </p>
            <div className="px-4 mt-2 flex flex-col gap-y-2">
              <p className="flex gap-x-1 items-center">
                <HiMiniInformationCircle size={18} className="text-textRed" />
                <span className="text-xs sm:text-sm md:text-base">
                  Trading below the 200-day simple moving average
                </span>
              </p>
              <p className="flex gap-x-1 items-center">
                <HiMiniInformationCircle size={18} className="text-textRed" />
                <span className="text-xs sm:text-sm md:text-base">
                  Is overbought and may soon fall
                </span>
              </p>
              <p className="flex gap-x-1 items-center">
                <HiMiniInformationCircle size={18} className="text-textRed" />
                <span className="text-xs sm:text-sm md:text-base">
                  Only 0 green days in the last 30 days (0%)
                </span>
              </p>
              <p className="flex gap-x-1 items-center">
                <HiMiniInformationCircle size={18} className="text-textRed" />
                <span className="text-xs sm:text-sm md:text-base">
                  Down -99% from all-time high
                </span>
              </p>
              <p className="flex gap-x-1 items-center">
                <HiMiniInformationCircle size={18} className="text-textRed" />
                <span className="text-xs sm:text-sm md:text-base">
                  Circulating supply not disclosed
                </span>
              </p>
              <p className="flex gap-x-1 items-center">
                <HiMiniInformationCircle size={18} className="text-textRed" />
                <span className="text-xs sm:text-sm md:text-base">
                  Not trading on any trusted exchanges
                </span>
              </p>
              <p className="flex gap-x-1 items-center">
                <HiMiniInformationCircle size={18} className="text-textRed" />
                <span className="text-xs sm:text-sm md:text-base">
                  Not trading with any fiat currencies{" "}
                </span>
              </p>
              <p className="underline my-4 text-xs sm:text-sm md:text-base"><Link href="https://coincodex.com/" target="_blank">See All Risks Checks</Link></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LiveData;
