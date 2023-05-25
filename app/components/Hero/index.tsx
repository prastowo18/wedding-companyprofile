import React, { useMemo } from "react";
import { Gabriela } from "next/font/google";
import Image from "next/image";

const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
});

export function Hero() {
  const renderMain = useMemo(() => {
    return (
      <header className="" id="hero">
        <div
          className="w-full bg-bottom bg-cover"
          // style={{
          //   backgroundImage: "url(/assets/heroimg.jpg)",
          // }}
        >
          <div className="flex flex-row items-center w-full h-full px-5 md:px-16 lg:px-32 py-32 md:py-[15rem]">
            <div className="md:w-1/2">
              <div className="">
                <h1 className="text-3xl font-bold text-black lg:text-5xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h1>
              </div>
              <div className="flex flex-col mt-4 text-base text-gray-500">
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita fuga in earum quasi iure, deserunt ratione ab vitae
                  ipsa autem.
                </p>
                <div className="">
                  <a className="text-base font-semibold text-blue-300 underline transition duration-150 ease-in-out cursor-pointer hover:text-blue-400">
                    How to order?
                  </a>
                </div>
                <div className="py-10">
                  <a
                    href="#"
                    className="rounded-md bg-blue-400 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
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
