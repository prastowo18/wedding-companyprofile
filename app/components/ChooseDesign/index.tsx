import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { IApiResponseDesignList, designList } from "@/app/types";

export function ChooseDesign(props: IApiResponseDesignList) {
  const { data } = props;
  const renderMain = useMemo(() => {
    return (
      <section
        id="choosedesign"
        className="flex flex-col items-center w-full px-2 py-20 lg:px-28 lg:py-28 bg-[#D6E0F0]"
      >
        <SectionTitle
          title="Pilihan Desain"
          desc="Pilih desain undangan sesuai dengan keinginanmu."
        />

        <div className="flex flex-col items-center justify-center gap-10 px-5 md:gap-20 md:flex-row md:mt-10 lg:px-20">
          {data.map((item: designList, idx: number) => (
            <div
              className="w-full md:w-[35%] bg-white rounded-md shadow-md"
              key={idx}
            >
              <div className="">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={350}
                  height={350}
                  className="w-full"
                />
              </div>
              <div className="px-3 py-5">
                <h5 className="mb-3 text-xl font-semibold">{item.title}</h5>
                <p className="text-[1rem] text-gray-500 mb-5">{item.desc}</p>
                <div className="flex flex-row items-center gap-3">
                  <a
                    href={item.link}
                    target="_blank"
                    className="px-3 py-2 text-[0.8125rem] font-semibold text-[#87A8D0] transition duration-150 ease-in-out rounded-md shadow-lg hover:text-[#87A8D0]/80 border-2"
                  >
                    Lihat Desain
                  </a>
                  <a
                    href="#price"
                    className="px-3 py-2 text-[0.8125rem] font-semibold bg-[#87A8D0] text-white transition duration-150 ease-in-out rounded-md shadow-md hover:bg-[#87A8D0]/80"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }, []);

  return renderMain;
}

export default ChooseDesign;
