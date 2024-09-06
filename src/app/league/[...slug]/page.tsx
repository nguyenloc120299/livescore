import MainLeagueHead from "@/components/element/league/MainLeagueHead";
import Tabs from "@/components/Tabs";
import { headers } from "next/headers";

interface Props {
  searchParams: { tab?: string };
}

const League: React.FC<Props> = async ({ searchParams: { tab } }) => {
  const headersList = headers();
  const pathName = headersList.get("x-pathname") as string;
  console.log("🚀 ~ League ~ pathName:", pathName);
  return (
    <div className="border border-[#222] rounded-[8rem] d:ml-[17rem] min-h-[630rem] max-w-[470rem] w-full">
      <div className="px-[15rem] pt-[10rem]">
        <MainLeagueHead />
        <div className="mb-[10rem] ">
          <Tabs
            baseHref={pathName}
            tabs={[
              {
                title: "Lịch thi đấu",
                tab: tab ? "" : null,
              },
              {
                title: "Kết quả",
                tab: "line-ups",
              },
              {
                title: "BXH",
                tab: "stats",
              },
              {
                title: "Vua phá lưới",
                tab: "stats",
              },
              {
                title: "CLB",
                tab: "stats",
              },
            ]}
            currentTab={tab}
          />
        </div>
      </div>
    </div>
  );
};

export default League;
