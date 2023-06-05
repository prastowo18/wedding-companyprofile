import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";

export function LangkahPembuatan() {
  const renderMain = useMemo(() => {
    return (
      <section
        id="langkahpembuatan"
        className="flex flex-col items-center w-full px-2 pt-20 lg:px-28 lg:py-28"
      >
        <SectionTitle
          title="Langkah Pembuatan"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laborum voluptatum animi rerum alias nulla architecto?"
        />

        <div className="grid grid-cols-1 gap-5 px-5 md:mt-20 lg:px-20 md:grid-cols-3">
          {Array(3)
            .fill(undefined)
            .map((item: any, idx: number) => (
              <div className="px-5 py-8 rounded-md shadow-md" key={idx}>
                <h5 className="mb-3 text-xl font-semibold">Registrasi</h5>
                <p className="text-[0.975rem] text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem repudiandae provident dicta nobis earum distinctio
                  dignissimos neque a, eveniet eaque sapiente unde ut voluptates
                  quia?
                </p>
              </div>
            ))}
        </div>
      </section>
    );
  }, []);

  return renderMain;
}

export default LangkahPembuatan;
