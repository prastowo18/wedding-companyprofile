import { Courgette, Playfair_Display } from "next/font/google";
import React, { useMemo } from "react";

interface IProps {
  title: string;
  textColor?: string;
  titleDesc?: string;
  desc: string;
}

const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export function SectionTitle(props: IProps) {
  const { titleDesc, title, desc, textColor } = props;
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-col w-full gap-2 px-2 pb-10 text-center md:w-2/3">
        <h1
          className={`${courgette.className} text-[1.875rem] text-[#393B44] font-semibold md:text-3xl drop-shadow-md ${textColor}`}
        >
          {title}
        </h1>
        <div className={`${playfairDisplay.className}`}>
          <p className="text-[1rem] text-gray-500 lg:px-10">{desc}</p>
        </div>
      </div>
    );
  }, [titleDesc, title, desc, textColor]);

  return renderMain;
}

export default SectionTitle;
