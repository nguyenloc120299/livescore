/* eslint-disable @next/next/no-img-element */
import { NAVIGATION_LINK } from "@/constants/menus";
import useBreakpoint from "@/hooks/useBreakpoint";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const MainTopBar = () => {
  const breakpoint = useBreakpoint();
  return (
    <header
      id="app-header"
      className={clsx(
        "fixed inset-x-0 top-0  w-screen  mx-auto max-w-[1200rem] bg-[#111] z-[99]"
      )}
    >
      <div className="mx-auto flex h-[60rem] max-w-[1200rem] items-center px-4 t:px-8 gap-[40rem]">
        <div className="w-[104rem] h-[19rem]">
          <img
            src="https://www.livescore.com/ls-web-assets/svgs/common/livescore-logo-b3b211143dccd9e22d164701d32a390f.svg"
            alt="Logo live score cập nhật tỉ số bóng đá"
            className="w-full h-full"
          />
        </div>
        {breakpoint !== "mobile" &&
          NAVIGATION_LINK.map((menu, index) => (
            <Link href={menu.href} key={index}>
              <div className="flex items-center gap-2">
                <span>{menu.icon}</span>
                <span>{menu.title}</span>
              </div>
            </Link>
          ))}
      </div>
    </header>
  );
};

export default MainTopBar;
4;
