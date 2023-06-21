import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { IApiResponseWhyChooseme, whyChoosemeList } from "@/app/types";

export function WhyChooseMe(props: IApiResponseWhyChooseme) {
  const { data } = props;

  const renderMain = useMemo(() => {
    return (
      <section
        id="whychooseme"
        className="flex flex-col items-center w-full px-8 py-20 select-none lg:px-28 lg:py-28"
      >
        <SectionTitle
          title="Mengapa memilih kami?"
          desc="Karena kami hadir dengan memberikan harga yang kompetitif dengan fitur yang lengkap, bisa custom dari pilihan template yang ada, dan tentunya kamu akan memberikan pelayanan terbaik untuk anda."
        />

        <div className="flex flex-col items-center w-full lg:flex-row lg:gap-10 md:px-10 lg:py-20">
          <div className="w-4/5">
            <Image
              src="/assets/whychoosemeimg.svg"
              alt="aboutme-img"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="grid items-center grid-cols-1 gap-5 px-1 py-10 lg:py-0 md:grid-cols-2">
            {data.map((item: whyChoosemeList, idx: number) => (
              <div
                className="flex flex-col gap-3 p-1 lg:items-center lg:flex-row"
                key={idx}
              >
                <div className="w-16 p-4 rounded-full shadow-md lg:w-16">
                  <Image
                    src={item.src}
                    alt="money-img"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
                <div className="flex-1">
                  <h2 className="mb-1 font-semibold text-[1rem]">
                    {item.title}
                  </h2>
                  <p className="text-[0.975rem] text-gray-500">{item.desc}</p>
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
