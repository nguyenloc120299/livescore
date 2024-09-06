import React from "react";
import parse from "html-react-parser";
interface Props {
  content_detail_event: Array<string>;
  math_content: Array<{
    caption: string;
    item_match: Array<{
      time: string;
      hasFlexRowReverse: boolean;
      start_block: string;
      icon_start: string;
      end_block: string;
      icon_end: string;
    }>;
  }>;
}

const Summary: React.FC<Props> = (props) => {

  
  if (!props?.math_content?.length) return <div className="text-center text-[11rem]">Đang cập nhật dữ liệu...</div>;
  return (
    <div
      className="border border-[#222] border-b-none rounded-[6px] "
      style={{ margin: "4px 10px 10px" }}
    >
      {!!props.math_content.length &&
        props.math_content.map((item, i) => (
          <div key={i}>
            <div
              key={i}
              className="bg-[#0a10268c] min-h-[38rem] border border-[#222] flex flex-nowrap text-[11px] justify-between py-[10rem] relative"
            >
              <span className="flex justify-center items-center w-[50rem] font-[700]">
                {item.caption}
              </span>
            </div>
            {!!item.item_match &&
              item.item_match.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center whitespace-nowrap border border-[#222] text-[#aaa] text-[11rem] justify-between relative"
                >
                  <span className="flex justify-center items-center h-[50rem] min-w-[50rem] w-[50rem]">
                    {item.time}
                  </span>
                  <div className="justify-end items-center flex rg flex-1 h-[50rem] whitespace-nowrap gap-[10rem]">
                    {!item.hasFlexRowReverse && (
                      <>
                        <div className="font-[700] text-[#fdfdfd]">
                          {item.start_block}
                        </div>
                        <div className="">{parse(item.icon_start)}</div>
                      </>
                    )}
                  </div>
                  <div
                    className="flex justify-center items-center font-[700] text-[#fdfdfd]"
                    style={{
                      flex: "0 0 36px",
                    }}
                  >
                    2 -1
                  </div>
                  <div className="flex flex-1 h-[50rem] rg items-center gap-[10rem]">
                    {item.hasFlexRowReverse && (
                      <>
                        <div className="font-[700] text-[#fdfdfd]">
                          {item.start_block}
                        </div>
                        <div className="">{parse(item.icon_start)}</div>
                      </>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Summary;
