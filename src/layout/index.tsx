"use client";

import useBreakpoint from "@/hooks/useBreakpoint";
import React from "react";
import MainSideBar from "./MainSideBar";
import clsx from "clsx";
import MainTopBar from "./MainTopBar";
import MainMenuBottom from "./MainMenuBottom";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const breakpoint = useBreakpoint();

  return (
    <>
   <MainTopBar/>
      <main
        className={clsx("mx-auto max-w-[1200rem] max-t:pb-20 flex", {
          "pt-[60rem]": breakpoint !== "mobile",
        })}
      >
        <MainSideBar />
        <div className="relative px-5  d:px-[80rem] mt-[70px] d:mt-0 w-full">
          {" "}
          {children}
        </div>
      </main>
      {breakpoint === "mobile" && <MainMenuBottom/>}
    </>
  );
};

export default MainLayout;
