"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const MainMenuBottom = () => {
  return (
    <div className="bg-[#181818] border-t sticky bottom-0 z-20 divide-y border-[#272A31] text-[8rem]">
      <div className="flex py-2">
        <Link
          href={"/"}
          className="flex-1 cursor-pointer flex flex-col items-center py-[0.375rem] gap-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <div className="whitespace-nowrap uppercase ">Tất cả</div>
        </Link>

        <div className="flex-1 cursor-pointer flex flex-col items-center py-[0.375rem] gap-1.5">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 21 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-[#DE2400] "
          >
            <path d="M7.439 14.444a.625.625 0 0 1-.425-.169 5.8 5.8 0 0 1 0-8.412.625.625 0 0 1 .85.912 4.562 4.562 0 0 0 0 6.588.625.625 0 0 1-.425 1.08Zm-2.5 1.675a.625.625 0 0 0 0-.881 7.143 7.143 0 0 1 0-10.338.634.634 0 0 0-.881-.912 8.4 8.4 0 0 0 0 12.162.625.625 0 0 0 .887-.031H4.94Zm8.456-1.844a5.798 5.798 0 0 0 0-8.412.625.625 0 1 0-.856.912 4.544 4.544 0 0 1 0 6.588.625.625 0 1 0 .856.912Zm2.95 1.875a8.381 8.381 0 0 0 0-12.162.625.625 0 0 0-.85.912 7.144 7.144 0 0 1 0 10.338.625.625 0 0 0 .425 1.08c.158 0 .31-.06.425-.168Zm-4.887-6.081a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Z" />
          </svg>
          <div className="bg-bg-button-live-gradient rounded-[18px] px-1 py-0.5 uppercase text-white  ">
            Trực tiếp (2)
          </div>
        </div>
        <div className="flex-1 cursor-pointer flex flex-col items-center py-[0.375rem] gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
          <div className="whitespace-nowrap uppercase ">Hot</div>
        </div>
        <div className="flex-1 cursor-pointer flex flex-col items-center py-[0.375rem] gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
            />
          </svg>
          <div className="whitespace-nowrap uppercase ">Tin tức</div>
        </div>
      </div>
    </div>
  );
};

export default MainMenuBottom;
