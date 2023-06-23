import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { IApiResponseMyFeature, myFeatureList } from "@/app/types";

export function MyFeature(props: IApiResponseMyFeature) {
  const { data } = props;
  const renderMain = useMemo(() => {
    return (
      <section
        id="myfeature"
        className="flex flex-col items-center w-full px-8 py-20 lg:px-28 lg:py-28 "
      >
        <SectionTitle
          title="Fitur Kami"
          desc="Fitur-fitur terbaik yang Divory sediakan untuk kamu yang ingin menyerbarkan kabar bahagia ke orang terdekat."
        />

        <div className="flex flex-col items-center w-4/5 mt-10 md:w-full lg:w-4/5 lg:flex-row lg:gap-10 md:px-10">
          <div className="grid grid-cols-1 gap-y-10 md:gap-y-0 md:gap-10 md:grid-cols-3">
            {data.map((item: myFeatureList, idx: number) => (
              <div
                className="px-2 pt-5 pb-10 bg-white rounded-md shadow-md md:mb-5"
                key={idx}
              >
                <div className="w-20 p-5 mx-auto bg-white rounded-full shadow-md">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h1 className="text-[1.125rem] mb-2">{item.title}</h1>
                  <p className="px-5 md:px-2 text-[1rem] text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }, []);

  return renderMain;
}

export default MyFeature;
