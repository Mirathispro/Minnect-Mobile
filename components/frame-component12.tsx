import type { NextPage } from "next";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: NextPage<FrameComponent12Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-0 box-border gap-[1008px] max-w-full text-center text-mid text-fg-secondary font-small ${className}`}
    >
      <div className="w-[390px] [backdrop-filter:blur(100px)] bg-darkslateblue-200 overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[21px] px-[11px] pb-[2.6px] box-border gap-[23px] max-w-full">
        <div className="w-[353.4px] flex flex-row items-start justify-end py-0 px-1.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="w-[53px] flex flex-row items-start justify-start gap-[4px]">
              <div className="flex-1 flex flex-row items-start justify-start z-[1]">
                <div className="flex-1 relative tracking-[-0.5px] leading-[14px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  9:41
                </div>
              </div>
              <img
                className="h-3.5 w-3.5 relative min-h-[14px] z-[1]"
                alt=""
                src="/location.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-2xs text-gray-200">
              <div className="h-3.5 w-11 relative">
                <img
                  className="absolute top-[0px] left-[0px] w-[18px] h-3.5 z-[1]"
                  alt=""
                  src="/network.svg"
                />
                <img
                  className="absolute top-[0px] left-[26px] w-[18px] h-3.5 z-[1]"
                  alt=""
                  src="/data.svg"
                />
              </div>
              <div className="h-3.5 w-[27px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full mix-blend-normal z-[1]"
                  alt=""
                  src="/signal-bars.svg"
                />
                <div className="absolute top-[0px] left-[0px] bg-fg-secondary flex flex-row items-start justify-end py-0 pr-0 pl-1.5 z-[2]">
                  <img
                    className="h-3.5 w-[18px] relative hidden min-h-[14px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <b className="w-3.5 relative tracking-[-0.5px] leading-[14px] inline-block min-w-[14px] z-[3]">
                    78
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-40 h-[47px] relative overflow-hidden shrink-0 hidden" />
        <div className="self-stretch flex flex-row items-start justify-start gap-[17px] text-left text-sm text-gray-700">
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[199px]">
            <div className="self-stretch rounded-3xs bg-gainsboro overflow-hidden flex flex-row items-start justify-between py-0 px-2 gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-[8.2px] px-0 pb-0">
                <div className="relative tracking-[0.03em] font-medium inline-block min-w-[97px]">
                  Search playlist
                </div>
              </div>
              <img
                className="h-[35.4px] w-[35.4px] relative"
                alt=""
                src="/icons-big7.svg"
              />
            </div>
          </div>
          <img
            className="h-[40.4px] w-[40.4px] relative object-contain"
            alt=""
            src="/icons-big8@2x.png"
          />
        </div>
      </div>
      <img
        className="h-[40.4px] w-[40.4px] relative shrink-0"
        alt=""
        src="/icons-big9.svg"
      />
    </div>
  );
};

export default FrameComponent12;
