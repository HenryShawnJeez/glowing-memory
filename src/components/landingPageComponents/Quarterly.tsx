import ColoredBox from "./ColoredBox";
//Import Icons
import { SlInfo } from "react-icons/sl";

const Quarterly = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <p className="text-sm sm:text-base md:text-lg font-bold">
        Carlive Chain Quarterly Returns
      </p>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-4">
        <ColoredBox
          width="w-[30rem]"
          color="bg-inherit"
          text="Year"
          position="start"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[10.5rem]"
          color="bg-inherit"
          text="Q1"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="Q2"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="Q3"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="Q4"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="TOTAL"
          position="center"
          textStyles="text-xs font-light text-textBlue"
        />
      </div>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-1">
        <ColoredBox
          width="w-[30rem]"
          color="bg-inherit"
          text="2018"
          position="start"
          textStyles="text-sm md:text-base text-textWhite font-bold"
        />
        <ColoredBox
          width="w-[10.5rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="redShade"
          text="-81.92%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="redShade"
          text="-46.41%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="redShade"
          text="-90.31%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
      </div>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-1">
        <ColoredBox
          width="w-[30rem]"
          color="bg-inherit"
          text="2019"
          position="start"
          textStyles="text-sm md:text-base text-textWhite font-bold"
        />
        <ColoredBox
          width="w-[10.5rem]"
          color="redShade"
          text="-67.51%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="greenShade"
          text="43.57%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="redShade"
          text="-62.77%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="redShade"
          text="-12.40%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="redShade"
          text="-84.79%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
      </div>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-1">
        <ColoredBox
          width="w-[30rem]"
          color="bg-inherit"
          text="2020"
          position="start"
          textStyles="text-sm md:text-base text-textWhite font-bold"
        />
        <ColoredBox
          width="w-[10.5rem]"
          color="redShade"
          text="-18.31%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="redShade"
          text="-44.57%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="greenShade"
          text="280.59%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="redShade"
          text="-88.04%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="redShade"
          text="-79.39%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
      </div>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-1">
        <ColoredBox
          width="w-[30rem]"
          color="bg-inherit"
          text="2021"
          position="start"
          textStyles="text-sm md:text-base text-textWhite font-bold"
        />
        <ColoredBox
          width="w-[10.5rem]"
          color="greenShade"
          text="207.77%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="greenShade"
          text="192.56%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="greenShade"
          text="0.54%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="redShade"
          text="-44.68%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="greenShade"
          text="400.82%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
      </div>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-1">
        <ColoredBox
          width="w-[30rem]"
          color="bg-inherit"
          text="2022"
          position="start"
          textStyles="text-sm md:text-base text-textWhite font-bold"
        />
        <ColoredBox
          width="w-[10.5rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
      </div>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-1">
        <ColoredBox
          width="w-[30rem]"
          color="bg-inherit"
          text="2023"
          position="start"
          textStyles="text-sm md:text-base text-textWhite font-bold"
        />
        <ColoredBox
          width="w-[10.5rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="bg-inherit"
          text="--"
          position="center"
          textStyles="text-sm md:text-base text-textBlue font-bold"
        />
      </div>
      <div className="flex gap-x-1 overflow-x-auto bar h-8 mt-1">
        <div className="flex gap-x-5 w-[30rem] items-center shrink-0">
          <ColoredBox
            width=""
            color="bg-inherit"
            text="Average"
            position=""
            textStyles="text-sm md:text-base text-textWhite font-bold"
          />
          <SlInfo className="text-textWhite" size={16} />
        </div>

        <ColoredBox
          width="w-[10.5rem]"
          color="greenShade"
          text="24.39%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="greenShade"
          text="47.89%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="greenShade"
          text="27.29%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="redShade"
          text="-38.31%"
          position="center"
          textStyles="text-sm md:text-base text-textRed font-bold"
        />
        <ColoredBox
          width="w-[11rem]"
          color="greenShade"
          text="29.27%"
          position="center"
          textStyles="text-sm md:text-base text-textGreen font-bold"
        />
      </div>
      <p className="text-sm md:text-base text-textBlue my-8">
        The top-performing year for Carlive Chain was 2021 when the price of IOV
        increased by <span className="text-textGreen font-bold">400.82%</span> from $0.00002987 to $0.000150. The worst
        performing year for Carlive Chain was 2018 when the price dropped by
        <span className="text-textRed font-bold">-90.31%</span> from $0.009831 to $0.000953. The average yearly growth of
        Carlive Chain over the last 6 years is <span className="text-textGreen font-bold">29.27%</span> per year. Usually, Carlive
        Chain performs best in Q2 with an average of <span className="text-textGreen font-bold">47.89% </span>gain and worst in Q4
        with <span className="text-textRed font-bold">-38.31% </span>loss.
      </p>
    </main>
  );
};

export default Quarterly;
