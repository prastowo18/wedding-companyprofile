import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";

export function PertanyaanUmum() {
  const renderMain = useMemo(() => {
    return (
      <section
        id="pertanyaanumum"
        className="flex flex-col items-center w-full px-8 py-20 select-none lg:px-28 lg:py-28"
      >
        <SectionTitle
          title="Pertanyaan Umum"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laborum voluptatum animi rerum alias nulla architecto?"
        />

        <div className="grid grid-cols-1 md:pt-10 md:gap-10 md:grid-cols-2 md:px-24">
          {Array(6)
            .fill(undefined)
            .map((e: any, idx: any) => (
              <div className="py-5" key={idx}>
                <h4 className="text-lg font-semibold md:text-2xl">
                  Lorem ipsum dolor sit amet.
                </h4>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, minima.
                </p>
              </div>
            ))}
        </div>
      </section>
    );
  }, []);

  return renderMain;
}

export default PertanyaanUmum;