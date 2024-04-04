
import MainTournament from "@/components/element/tournament/MainTournament";
import React from "react";

const MainSideBar = () => {
  return (
    <nav className="sticky left-0 top-[60rem] h-fit min-h-[calc(100vh-60rem)] w-[274rem]   max-d:hidden border border-[#222] rounded-[8rem] p-[5rem]">
      <MainTournament/>
    </nav>
  );
};

export default MainSideBar;
