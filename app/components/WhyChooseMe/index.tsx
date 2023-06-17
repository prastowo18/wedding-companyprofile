import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

export function WhyChooseMe() {
  const renderMain = useMemo(() => {
    return (
      <section
        id="whychooseme"
        className="flex flex-col items-center w-full px-8 py-20 select-none lg:px-28 lg:py-28"
      >
        <SectionTitle
          title="Mengapa memilih kami?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laborum voluptatum animi rerum alias nulla architecto?"
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
            {Array(4)
              .fill(undefined)
              .map((item: any, idx: any) => (
                <div
                  className="flex flex-col gap-3 p-1 lg:items-center lg:flex-row"
                  key={idx}
                >
                  <div className="w-16 p-3 rounded-full shadow-md lg:w-24">
                    <Image
                      src="/assets/money.png"
                      alt="money-img"
                      width={100}
                      height={100}
                      className=""
                    />
                  </div>
                  <div className="">
                    <h2 className="mb-1 font-semibold text-[0.975rem]">
                      Harga Kompetitif
                    </h2>
                    <p className="text-[0.975rem] text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor, eum error iure labore commodi officiis.
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

export default WhyChooseMe;
