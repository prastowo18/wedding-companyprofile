import React, { useMemo, useState } from "react";
import MenuItem from "./MenuItem";

export function Navbar() {
  const [navMobile, setNavMobile] = useState<boolean>(false);
  const [activeName, setActiveName] = useState<any>("#home");

  const renderMain = useMemo(() => {
    return (
      <>
        <nav className="flex justify-between items-center w-full h-10 px-8 py-10 pt-8 lg:px-16 lg:py-10 fixed bg-white/50 backdrop-blur-sm top-0">
          <div className="">
            <h1 className="text-2xl font-black text-amber-400 border-b-2 border-amber-200">
              <a href="#home" onClick={() => setActiveName("#home")}>
                Prastowo<span className="text-black">Adi</span>
              </a>
            </h1>
          </div>
          <div className="lg:hidden relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setNavMobile(!navMobile)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {navMobile && (
              <div className="absolute right-1 top-8 w-40 shadow-md rounded bg-white/50 backdrop-blur-sm">
                <div className="px-2 select-none">
                  <p className="border-b-2 p-3 text-amber-400 border-b-amber-400">
                    Home
                  </p>
                  <p className="border-b-2 p-3">About</p>
                  <p className="border-b-2 p-3">Project</p>
                  <p className="p-3">Contact</p>
                </div>
              </div>
            )}
          </div>
          <div className="hidden lg:flex gap-7">
            <MenuItem
              title="Home"
              active={`${activeName === "#home" ? "active" : ""}`}
              href="#home"
              setActiveName={(val: string) => setActiveName(val)}
            />
            <MenuItem
              title="About"
              active={`${activeName === "#aboutme" ? "active" : ""}`}
              href="#aboutme"
              setActiveName={(val: string) => setActiveName(val)}
            />
            <MenuItem
              title="Project"
              active={`${activeName === "#project" ? "active" : ""}`}
              href="#project"
              setActiveName={(val: string) => setActiveName(val)}
            />
            <MenuItem
              title="Contact"
              active={`${activeName === "#contactme" ? "active" : ""}`}
              href="#contactme"
              setActiveName={(val: string) => setActiveName(val)}
            />
          </div>
        </nav>
      </>
    );
  }, [navMobile, activeName]);

  return renderMain;
}

export default Navbar;
