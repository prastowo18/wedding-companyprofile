import React, { useMemo } from "react";

export function Footer() {
  const renderMain = useMemo(() => {
    return (
      <footer className="flex flex-row p-5 bg-[#87A8D0] justify-center">
        <div className="">
          <h5 className="font-semibold text-white">© 2023 divory.my.id</h5>
        </div>
      </footer>
    );
  }, []);

  return renderMain;
}

export default Footer;
