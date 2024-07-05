import type { NextPage } from "next";

export type EntertainmentType = {
  className?: string;
};

const Entertainment: NextPage<EntertainmentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-[23px] text-left text-lg text-fg-primary font-small ${className}`}
    >
      <div className="w-[210px] h-6 relative tracking-[0.03em] font-medium inline-block shrink-0">
        Entertainment
      </div>
      <div className="self-stretch h-[211px] overflow-x-auto shrink-0 flex flex-row flex-wrap items-center justify-start relative gap-[11px] text-xl text-white font-satoshi">
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[0px] left-[0px] rounded-3xs bg-crimson-200 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[67px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Netflix
          </div>
        </div>
        <div className="h-[100px] w-[170px] absolute !m-[0] top-[0px] left-[181px] rounded-3xs bg-crimson-100 overflow-hidden shrink-0">
          <div className="absolute top-[22px] left-[57.9px] w-[136.1px] h-[180.4px]">
            <img
              className="absolute top-[38px] left-[0px] rounded-8xs w-[142.4px] h-[142.4px] object-contain"
              alt=""
              src="/image-13@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] rounded-8xs w-[142.4px] h-[142.4px] object-contain z-[1]"
              alt=""
              src="/image-14@2x.png"
            />
          </div>
          <div className="absolute top-[20px] left-[20px] tracking-[0.03em] font-black z-[2]">
            Anime
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[111px] left-[0px] rounded-3xs bg-royalblue-200 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[68px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Disney
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[111px] left-[181px] rounded-3xs bg-crimson-300 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[79px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Gaming
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
