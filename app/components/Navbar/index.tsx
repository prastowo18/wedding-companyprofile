import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import useComponentVisible from "@/app/hooks/useComponentVisible";

export function Navbar() {
  const [activeName, setActiveName] = useState<any>("#home");
  const [scrollHight, setScrollHight] = useState<number>(0);

  const { isComponentVisible, ref, setIsComponentVisible } =
    useComponentVisible(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollHight(scrollY);
    });
  }, [setActiveName]);

  useEffect(() => {
    if (!isComponentVisible) {
      scrollHight < 2200 && setActiveName("#home");
      scrollHight > 2200 && setActiveName("#myfeature");
      scrollHight > 3400 && setActiveName("#choosedesign");
      scrollHight > 4400 && setActiveName("#price");
      scrollHight > 5100 && setActiveName("#pertanyaanumum");
    }
  }, [scrollHight, isComponentVisible]);

  const renderMain = useMemo(() => {
    return (
      <>
        <nav className="flex justify-center items-center w-full h-10 px-2 py-14 pt-8 lg:px-16 fixed bg-[#87A8D0] -top-1 rounded-b-[2rem] shadow-md drop-shadow-md z-50">
          <div className="relative flex items-center justify-between w-full px-5 mt-3 md:mt-3">
            <div className="mt-2">
              <Image
                src="/assets-fix/logo.png"
                alt="hero-img"
                width={80}
                height={80}
                priority
                className=""
              />
            </div>
            <div className="flex-row items-center justify-center hidden gap-8 mt-3 md:flex">
              <MenuItem
                href="#home"
                title="Home"
                active={activeName === "#home" ? "active" : ""}
                setActiveName={() => setActiveName("#home")}
              />
              <MenuItem
                href="#myfeature"
                title="Fitur"
                active={activeName === "#myfeature" ? "active" : ""}
                setActiveName={() => setActiveName("#myfeature")}
              />
              <MenuItem
                href="#choosedesign"
                title="Design"
                active={activeName === "#choosedesign" ? "active" : ""}
                setActiveName={() => setActiveName("#choosedesign")}
              />
              <MenuItem
                href="#price"
                title="Price"
                active={activeName === "#price" ? "active" : ""}
                setActiveName={() => setActiveName("#price")}
              />
              <MenuItem
                href="#pertanyaanumum"
                title="Contact"
                active={activeName === "#pertanyaanumum" ? "active" : ""}
                setActiveName={() => setActiveName("#pertanyaanumum")}
              />
            </div>

            <div
              className="mt-3 text-white cursor-pointer md:hidden"
              onClick={() => {
                setIsComponentVisible(true);
              }}
            >
              <svg
                viewBox="0 0 700 1000"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M650 450c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 513.333 0 500c0-13.333 4.667-25 14-35s21.333-15 36-15h600M50 350c-13.333 0-25-5-35-15S0 313.333 0 300c0-13.333 4.667-25 14-35s21.333-15 36-15h600c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50m600 300c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 713.333 0 700c0-13.333 4.667-25 14-35s21.333-15 36-15h600" />
              </svg>
            </div>

            <div
              className="absolute w-1/2 rounded-md bg-white/90 right-5 top-[5.5rem] md:hidden"
              ref={ref}
            >
              {isComponentVisible && (
                <div className="flex flex-col p-3 text-lg">
                  <a
                    href="#home"
                    className={`py-1 ${
                      activeName === "#home"
                        ? "text-[#87A8D0] border-b-2 border-b-[#87A8D0]"
                        : "border-b-2"
                    }`}
                    onClick={() => setActiveName("#home")}
                  >
                    Home
                  </a>
                  <a
                    href="#myfeature"
                    className={`py-1 ${
                      activeName === "#myfeature"
                        ? "text-[#87A8D0] border-b-2 border-b-[#87A8D0]"
                        : "border-b-2 border-b-gray-300"
                    }`}
                    onClick={() => setActiveName("#myfeature")}
                  >
                    Fitur
                  </a>
                  <a
                    href="#choosedesign"
                    className={`py-1 ${
                      activeName === "#choosedesign"
                        ? "text-[#87A8D0] border-b-2 border-b-[#87A8D0]"
                        : "border-b-2 border-b-gray-300"
                    }`}
                    onClick={() => setActiveName("#choosedesign")}
                  >
                    Design
                  </a>
                  <a
                    href="#price"
                    className={`py-1 ${
                      activeName === "#price"
                        ? "text-[#87A8D0] border-b-2 border-b-[#87A8D0]"
                        : "border-b-2 border-b-gray-300"
                    }`}
                    onClick={() => setActiveName("#price")}
                  >
                    Price
                  </a>
                  <a
                    href="#pertanyaanumum"
                    className={`py-1 ${
                      activeName === "#pertanyaanumum" ? "text-[#87A8D0]" : ""
                    }`}
                    onClick={() => setActiveName("#pertanyaanumum")}
                  >
                    Contact
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </>
    );
  }, [activeName, scrollHight, isComponentVisible, ref, setIsComponentVisible]);

  return renderMain;
}

export default Navbar;
