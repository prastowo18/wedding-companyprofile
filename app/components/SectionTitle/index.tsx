import { Courgette } from "next/font/google";
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

export function SectionTitle(props: IProps) {
  const { titleDesc, title, desc, textColor } = props;
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-col w-full gap-2 pb-10 text-center md:w-2/3">
        <h4
          className={`${courgette.className} text-2xl text-[#393B44] font-semibold md:text-3xl drop-shadow-md ${textColor}`}
        >
          {title}
        </h4>
        <div className="">
          <p className="text-gray-500 lg:px-10 text-[0.975rem]">{desc}</p>
        </div>
      </div>
    );
  }, [titleDesc, title, desc, textColor]);

  return renderMain;
}

export default SectionTitle;
