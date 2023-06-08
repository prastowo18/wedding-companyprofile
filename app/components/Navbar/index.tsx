import React, { useMemo, useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [navMobile, setNavMobile] = useState<boolean>(false);
  const [activeName, setActiveName] = useState<any>("#home");

  const renderMain = useMemo(() => {
    return (
      <>
        <nav className="flex justify-center items-center w-full h-10 px-8 py-12 pt-8 lg:px-16 fixed bg-[#D6E0F0] -top-1 rounded-b-[2rem] shadow-md drop-shadow-md z-50">
          <div className="mt-3">
            <Image
              src="/assets/logo.png"
              alt="hero-img"
              width={80}
              height={80}
              priority
              className=""
            />
          </div>
        </nav>
      </>
    );
  }, [navMobile, activeName]);

  return renderMain;
}

export default Navbar;
