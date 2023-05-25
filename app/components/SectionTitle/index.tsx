import React, { useMemo } from "react";

interface IProps {
  title: string;
  titleDesc?: string;
  desc: string;
}

export function SectionTitle(props: IProps) {
  const { titleDesc, title, desc } = props;
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-col w-full gap-2 pb-10 text-center md:w-2/3">
        <h4 className="text-2xl font-semibold md:text-3xl">{title}</h4>
        <div className="">
          <p className="text-gray-500 lg:px-10 text-[0.975rem]">{desc}</p>
        </div>
      </div>
    );
  }, [titleDesc, title, desc]);

  return renderMain;
}

export default SectionTitle;
