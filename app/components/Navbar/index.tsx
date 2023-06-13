import React, { useMemo, useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";

export function Navbar() {
  const [navMobile, setNavMobile] = useState<boolean>(false);
  const [activeName, setActiveName] = useState<any>("#home");

  const renderMain = useMemo(() => {
    return (
      <>
        <nav className="flex justify-center items-center w-full h-10 px-8 py-14 pt-8 lg:px-16 fixed bg-[#87A8D0] -top-1 rounded-b-[2rem] shadow-md drop-shadow-md z-50">
          <div className="flex items-center justify-between w-full px-10 mt-3">
            <div className="">
              <Image
                src="/assets/logo.png"
                alt="hero-img"
                width={80}
                height={80}
                priority
                className=""
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-8 mt-3">
              <MenuItem
                href=""
                title="Home"
                active="#home"
                setActiveName={() => setActiveName("#home")}
              />
              <MenuItem
                href=""
                title="Fitur"
                active="#fitur"
                setActiveName={() => setActiveName("#home")}
              />
              <MenuItem
                href=""
                title="Design"
                active="#design"
                setActiveName={() => setActiveName("#home")}
              />
              <MenuItem
                href=""
                title="Price"
                active="#price"
                setActiveName={() => setActiveName("#home")}
              />
            </div>
          </div>
        </nav>
      </>
    );
  }, [navMobile, activeName]);

  return renderMain;
}

export default Navbar;
