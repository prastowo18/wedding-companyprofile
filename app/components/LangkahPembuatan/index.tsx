import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";
import {
  IApiResponseLangkahPembuatan,
  langkahPembuatanList,
} from "@/app/types";

export function LangkahPembuatan(props: IApiResponseLangkahPembuatan) {
  const { data } = props;
  const renderMain = useMemo(() => {
    return (
      <section
        id="langkahpembuatan"
        className="flex flex-col items-center w-full px-2 py-20 lg:px-28 lg:py-28 bg-[#D6E0F0]"
      >
        <SectionTitle
          title="Langkah Pembuatan"
          desc="Hanya membutuhkan beberapa langkah saja hingga undangan kamu siap digunakan."
        />

        <div className="grid grid-cols-1 gap-5 px-5 md:mt-20 lg:px-20 md:grid-cols-3">
          {data.map((item: langkahPembuatanList, idx: number) => (
            <div className="px-5 py-8 bg-white rounded-md shadow-md" key={idx}>
              <h5 className="mb-3 text-xl font-semibold">{item.title}</h5>
              <p className="text-[0.975rem] text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }, []);

  return renderMain;
}

export default LangkahPembuatan;
