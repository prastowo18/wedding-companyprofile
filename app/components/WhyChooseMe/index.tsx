import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { IApiResponseWhyChooseme, whyChoosemeList } from "@/app/types";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export function WhyChooseMe(props: IApiResponseWhyChooseme) {
  const { data } = props;

  const renderMain = useMemo(() => {
    return (
      <section
        id="whychooseme"
        className="flex flex-col items-center w-full px-4 py-20 select-none lg:px-28 lg:py-28"
      >
        <SectionTitle
          title="Mengapa memilih kami?"
          desc="Karena kami hadir dengan memberikan harga yang kompetitif dengan fitur yang lengkap, bisa custom dari pilihan template yang ada, dan tentunya kami akan memberikan pelayanan terbaik untuk anda."
        />

        <div className="flex flex-col items-center w-full lg:flex-row lg:gap-5 md:px-10 lg:px-5 lg:py-20">
          <div className="w-4/5">
            <Image
              src="/assets-fix/whychoosemeimg.svg"
              alt="aboutme-img"
              width={500}
              height={500}
              priority
              className="mx-auto"
            />
          </div>
          <div className="grid items-center grid-cols-1 gap-5 px-1 py-10 lg:py-0 md:grid-cols-2">
            {data.map((item: whyChoosemeList, idx: number) => (
              <div
                className="flex flex-col gap-3 p-1 lg:items-center lg:flex-row"
                key={idx}
              >
                <div className="w-[4.1rem] p-4 rounded-full shadow-md lg:w-16 bg-white">
                  <Image
                    src={item.src}
                    alt="money-img"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
                <div className="flex-1">
                  <h1 className="mb-1 text-lg font-semibold">{item.title}</h1>
                  <p className="text-[1rem] text-gray-700">{item.desc}</p>
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

export default WhyChooseMe;
