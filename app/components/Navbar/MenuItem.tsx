import React, { useMemo } from "react";

interface IProps {
  title: string;
  active?: string;
  href: string;
  setActiveName: (_val: string) => void;
}

export function MenuItem(props: IProps) {
  const { title, active, href, setActiveName } = props;
  const renderMain = useMemo(() => {
    return (
      <li
        className={`${active} cursor-pointer text-white text-lg hover:border-b-2 hover:text-slate-200 hover:border-b-slate-200 transition duration-150 list-none`}
      >
        <a href={href} onClick={() => setActiveName(href)}>
          {title}
        </a>
      </li>
    );
  }, [title, active, href, setActiveName]);

  return renderMain;
}

export default MenuItem;
