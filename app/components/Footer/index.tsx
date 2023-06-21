import React, { useMemo } from "react";

export function Footer() {
  const renderMain = useMemo(() => {
    return (
      <footer className="flex flex-row justify-center p-5 border-t-2 border-t-[#393B44]/50">
        <div className="">
          <h5 className="font-semibold text-[#393B44]">© 2023 divory.my.id</h5>
        </div>
      </footer>
    );
  }, []);

  return renderMain;
}

export default Footer;
