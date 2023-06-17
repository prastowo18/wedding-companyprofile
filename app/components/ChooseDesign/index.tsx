import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

export function ChooseDesign() {
  const renderMain = useMemo(() => {
    return (
      <section
        id="choosedesign"
        className="flex flex-col items-center w-full px-2 py-20 lg:px-28 lg:py-28"
      >
        <SectionTitle
          title="Pilihan Desain"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laborum voluptatum animi rerum alias nulla architecto?"
        />

        <div className="grid grid-cols-1 gap-5 px-5 md:mt-20 lg:px-20 md:grid-cols-2 lg:grid-cols-3">
          {Array(3)
            .fill(undefined)
            .map((item: any, idx: number) => (
              <div className="rounded-md shadow-md" key={idx}>
                <div className="">
                  <Image
                    src="/assets/choosetheme1.png"
                    alt="money-img"
                    width={350}
                    height={350}
                    className="w-full"
                  />
                </div>
                <div className="px-3 py-5">
                  <h5 className="mb-3 text-xl font-semibold">
                    Sparkling Flowers
                  </h5>
                  <p className="text-[0.975rem] text-gray-500 mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorem repudiandae provident dicta nobis earum distinctio
                    dignissimos neque a, eveniet eaque sapiente unde ut
                    voluptates quia?
                  </p>
                  <a
                    href="https://weeding-theme1.vercel.app/"
                    target="_blank"
                    className="text-sm font-semibold text-blue-500 transition duration-150 ease-in-out hover:text-blue-400"
                  >
                    Lihat Desain
                  </a>
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
