"use client";

import useBreakpoint from "@/hooks/useBreakpoint";
import React from "react";
import MainSideBar from "./MainSideBar";
import clsx from "clsx";
import MainTopBar from "./MainTopBar";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const breakpoint = useBreakpoint();
  return (
    <>
      {breakpoint !== "mobile" && <MainTopBar/>}
      <main
        className={clsx("mx-auto max-w-[1200rem] max-t:pb-20 d:flex", {
          "pt-[60rem]": breakpoint !== "mobile",
        })}
      >
        <MainSideBar />
        <div className="relative px-5 d:w-[calc(100%-274rem)] d:px-[80rem]">
          {" "}
          {children}
        </div>
      </main>
      {breakpoint === "mobile" && <div>BottomBar</div>}
    </>
  );
};

export default MainLayout;
