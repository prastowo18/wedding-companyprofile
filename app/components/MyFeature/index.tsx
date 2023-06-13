import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

export function MyFeature() {
  const renderMain = useMemo(() => {
    return (
      <section
        id="whychooseme"
        className="flex flex-col items-center w-full px-2 pt-5 lg:px-28 lg:py-28 bg-[#D6E0F0]"
      >
        <SectionTitle
          title="Fitur Kami"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laborum voluptatum animi rerum alias nulla architecto?"
        />

        <div className="flex flex-col items-center w-4/5 mt-10 md:w-full lg:w-4/5 lg:flex-row lg:gap-10 md:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-y-10 md:gap-y-0 md:gap-10 md:grid-cols-3">
            {Array(9)
              .fill(undefined)
              .map((item: any, idx: any) => (
                <div
                  className="px-2 pt-5 pb-10 mb-5 bg-white rounded-md shadow-md"
                  key={idx}
                >
                  <div className="w-20 p-5 mx-auto rounded-full shadow-md">
                    <Image
                      src="/assets/money.png"
                      alt="money-img"
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="font-semibold text-[0.975rem] mb-4">
                      Lorem, ipsum.
                    </h2>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
