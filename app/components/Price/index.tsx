import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";

export function Price() {
  const renderMain = useMemo(() => {
    return (
      <section
        id="price"
        className="flex flex-col items-center w-full px-2 pt-20 lg:px-28 lg:py-28"
      >
        <SectionTitle
          title="Harga Undangan"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laborum voluptatum animi rerum alias nulla architecto?"
        />
        <div className="w-full py-10 lg:py-20">
          <div className="grid grid-cols-1 gap-10 px-5 md:px-24 lg:px-32 md:grid-cols-2 lg:grid-cols-3">
            {Array(3)
              .fill(undefined)
              .map((e: any, idx: any) => (
                <div className="rounded-md shadow-md" key={idx}>
                  <div className="py-5 text-center bg-blue-400 rounded-t-md">
                    <h2 className="text-xl font-semibold text-white">Silver</h2>
                  </div>
                  <div className="flex flex-row items-center justify-center mt-5 text-center">
                    <span className="items-start mr-1 -mt-3 text-sm">Rp</span>
                    <h2 className="text-3xl">99000</h2>
                  </div>
                  <div className="px-5 pt-8 pb-10">
                    {Array(10)
                      .fill(undefined)
                      .map((e: any, idx: any) => (
                        <div
                          className="flex flex-row items-center justify-center gap-1"
                          key={idx}
                        >
                          <div className="text-green-500">
                            <svg
                              viewBox="0 0 1024 1024"
                              fill="currentColor"
                              height="1em"
                              width="1em"
                            >
                              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                            </svg>
                          </div>
                          <p className="text-sm">Masa Aktif 3 bulan</p>
                        </div>
                      ))}
                  </div>
                  <div className="my-5 text-center">
                    <a
                      href="#"
                      className="px-3 py-2 text-sm font-semibold text-white bg-blue-400 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                      Pesan
                    </a>
                  </div>
                  <div className="pb-5 text-center">
                    <p className="text-xs">Gratis 7 Hari Uang Kembali</p>
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

export default Price;
