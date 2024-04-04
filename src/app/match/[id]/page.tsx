import React from "react";

interface Props {
  params: { id: string };
}
 const MatchSingle: React.FC<Props> = async ({ params: { id } }) => {
  return (
    <div className="border border-[#222] rounded-[8rem] ml-[17rem] min-h-[630rem] max-w-[470rem] w-full"></div>
  );
};
export default MatchSingle