import React, { useMemo } from "react";
import SectionTitle from "../SectionTitle";
import { IApiResponsePriceList, itemPrice, priceList } from "@/app/types";

export function Price(props: IApiResponsePriceList) {
  const { data } = props;

  const renderMain = useMemo(() => {
    return (
      <section
        id="price"
        className="flex flex-col items-center w-full px-2 py-20 lg:px-28 lg:py-28"
      >
        <SectionTitle
          title="Harga Undangan"
          desc="Pilih paket sesuai dengan kebutuhanmu."
        />
        <div className="w-full lg:py-20">
          <div className="grid grid-cols-1 gap-10 px-5 md:px-24 lg:px-32 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item: priceList, idx: number) => (
              <div className="bg-white rounded-md shadow-md" key={idx}>
                <div className="py-5 text-center bg-[#87A8D0] rounded-t-md">
                  <h1 className="text-xl font-semibold text-white">
                    {item.type}
                  </h1>
                </div>
                <div className="flex flex-row items-center justify-center mt-5 text-center">
                  <span className="items-start mr-1 -mt-3 text-sm">Rp</span>
                  <h1 className="text-3xl">{item.price}</h1>
                </div>
                <div className="px-5 pt-8 pb-10">
                  {item.itemList.map((item: itemPrice, idx: number) => (
                    <div className="flex flex-row items-center gap-1" key={idx}>
                      {item.active ? (
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
                      ) : (
                        <div className="text-red-500">
                          <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                          >
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
                          </svg>
                        </div>
                      )}
                      <p className="text-sm">{item.title}</p>
                    </div>
                  ))}
                </div>
                <div className="my-5 text-center">
                  <a
                    href={item.link}
                    target="_blank"
                    className="px-3 py-2 text-sm font-semibold text-white bg-[#393B44] rounded-md shadow-sm hover:bg-[#393B44]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    Pesan
                  </a>
                </div>
                <div className="pb-5 text-center">
                  <p className="text-xs">{item.desc}</p>
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
