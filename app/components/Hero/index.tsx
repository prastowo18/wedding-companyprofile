import React, { useMemo } from "react";
import { Courgette, Playfair_Display } from "next/font/google";
import Image from "next/image";

const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export function Hero() {
  const renderMain = useMemo(() => {
    return (
      <header className="" id="home">
        <div
          className="w-full bg-cover select-none"
          style={{
            backgroundImage: "url(/assets/herobg.png)",
          }}
        >
          <div className="flex flex-row items-center w-full h-full px-5 bg-white/50 py-28 md:px-16 lg:px-32">
            <div className="mt-20 md:mt-36 md:w-1/2">
              <div className="">
                <h1
                  className={`${courgette.className} text-3xl font-bold lg:text-5xl text-[#393B44] drop-shadow-lg`}
                >
                  Beritakan Kabar Baik dan Moment Bahagiamu!
                </h1>
              </div>
              <div className="flex flex-col mt-4 text-base text-gray-500">
                <p className={`${playfairDisplay.className} text-[#393B44]`}>
                  Divory akan membantu kamu dalam menyebarkan berita baik dan
                  bahagia dengan lebih cepat, mudah dan efesien.
                </p>
                <div className="py-10">
                  <a
                    href="#langkahpembuatan"
                    className="rounded-md bg-[#393B44] px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-[#393B44]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Buat Undangan
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden mt-20 md:block">
              <Image
                src="/assets/heroimg2.png"
                alt="hero-img"
                width={500}
                height={500}
                priority
                className="w-full"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }, []);

  return renderMain;
}

export default Hero;
