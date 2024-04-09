/* eslint-disable @next/next/no-img-element */
import { handleCrawlMatchLineups } from "@/api/match";
import { headers } from "next/headers";
import React from "react";

const LineUps = async () => {
  const headersList = headers();
  const pathName = headersList.get("x-pathname") as string;

  const data = await handleCrawlMatchLineups(pathName);
  if (!data?.home?.homeplayer?.length || !data?.away?.awayplayer?.length)
    return (
      <div className="text-center text-[11rem]">Chưa cập nhật dữ liệu</div>
    );

  return (
    <div className="">
      <div className="bg-[#58741f] px-[15rem] pt-[1rem]">
        <span className="text-[#fdfdfd] flex text-[11rem] mb-[15rem] mt-[14rem]">
          <span className="font-[900] mr-[5rem] uppercase">
            {data?.home?.nameClubHome}
          </span>
          <span className="font-[400]">{data?.home?.formationHome}</span>
        </span>
        <div
          className="bg-[repeating-linear-gradient(180deg, #516d14, #516d14 10%, #58741f 0, #58741f 20%)] border-[2rem] border-[#96a772]
        h-[708rem] overflow-hidden relative
        "
        >
          <div className="flex flex-col h-1/2 justify-between p-[10rem] absolute w-full z-[20]">
            {!!data?.home?.homeplayer?.length &&
              data?.home?.homeplayer.map((item, index) => (
                <div className="flex items-start text-[#fff] " key={index}>
                  {item?.map((player: any, index: number) => (
                    <div className="flex-1" key={index}>
                      <div className="flex justify-center text-center  ">
                        <div className="h-[30px] w-[30px border-[2px] border-[#fff] bg-[#ad5900] rounded-full relative">
                          <img
                            src={player?.playerAvatar}
                            alt={player?.name}
                            className="w-full h-full rounded-full inline-block"
                          />
                        </div>
                      </div>
                      <div className="text-[#fff] flex justify-center text-[11px] font-[700] text-center rg">
                        {player?.name}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
          <div className="flex flex-col h-1/2 justify-between p-[10rem] absolute w-full z-[20] top-1/2">
            {!!data?.away?.awayplayer?.length &&
              data?.away?.awayplayer.map((item, index) => (
                <div className="flex items-start text-[#fff] " key={index}>
                  {item?.map((player: any, index: number) => (
                    <div className="flex-1" key={index}>
                      <div className="flex justify-center text-center  ">
                        <div className="h-[30px] w-[30px border-[2px] border-[#fff] bg-[#212121] rounded-full relative">
                          <img
                            src={player?.playerAvatar}
                            alt={player?.name}
                            className="w-full h-full rounded-full inline-block"
                          />
                        </div>
                      </div>
                      <div className="text-[#fff] flex justify-center text-[11px] font-[700] text-center rg">
                        {player?.name}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
          <div className="h-full overflow-hidden relative w-full ">
            <div className="left-[-20px] top-[-20px]  border-[2rem] border-[#96a772] h-[40rem] rounded-[9999rem] absolute w-[40rem]"></div>
            <div
              className=" top-[-20px]  border-[2rem] border-[#96a772] h-[40rem] rounded-[9999rem] absolute w-[40rem]"
              style={{
                left: "calc(100% - 20px)",
              }}
            ></div>
            <div className="right-[-20px] bottom-[-20px]  border-[2rem] border-[#96a772] h-[40rem] rounded-[9999rem] absolute w-[40rem]"></div>
            <div className="left-[-20px] bottom-[-20px]  border-[2rem] border-[#96a772] h-[40rem] rounded-[9999rem] absolute w-[40rem]"></div>
          </div>
          <div
            className="border border-[#96a772] absolute w-full"
            style={{
              top: "calc(50% - 2px)",
            }}
          ></div>
          <div
            className="bg-[#96a772] rounded-[9999px] h-[6px] w-[6px] absolute"
            style={{
              left: "calc(50% - 3px)",
              top: "calc(50% - 4px)",
            }}
          ></div>
          <div className="io"></div>
          <div className="ko mo">
            <div className="jo"></div>
          </div>
          <div className="no mo"></div>
          <div className="ko lo">
            <div className="jo"></div>
          </div>
          <div className="no lo"></div>
        </div>
        <span className="text-[#fdfdfd] flex text-[11rem] mb-[15rem] mt-[14rem]">
          <span className="font-[900] mr-[5rem] uppercase">Udinese</span>
          <span className="font-[400]">3-5-1-1</span>
        </span>
      </div>
    </div>
  );
};

export default LineUps;
