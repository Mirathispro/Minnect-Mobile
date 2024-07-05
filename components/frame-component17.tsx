import type { NextPage } from "next";

export type FrameComponent17Type = {
  className?: string;
};

const FrameComponent17: NextPage<FrameComponent17Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-3.5 pl-[15px] box-border max-w-full text-left text-xs text-fg-primary font-small ${className}`}
    >
      <div className="flex-1 rounded-xl box-border flex flex-col items-start justify-start pt-[3px] pb-[13px] pr-[3px] pl-[21px] gap-[10px] max-w-full border-[2px] border-solid border-gray-300">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.6px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <div className="relative tracking-[0.03em] font-medium inline-block min-w-[42px]">
                Friends
              </div>
            </div>
            <img
              className="h-[40.4px] w-[40.4px] relative"
              alt=""
              src="/icons-big63.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[4px]">
            <img
              className="h-10 w-10 relative rounded-81xl object-contain"
              alt=""
              src="/friend4@2x.png"
            />
            <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
              <div className="flex flex-row items-start justify-start py-0 pr-1 pl-2">
                <div className="relative tracking-[0.03em] inline-block min-w-[120px]">
                  FriendlyMusicListener
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[3px] text-sm">
                <img
                  className="h-[30px] w-[30px] relative"
                  alt=""
                  src="/icons-big64.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5.5px] pb-0 pr-[7px] pl-0">
                  <div className="relative tracking-[0.03em] inline-block min-w-[86px]">
                    Goosebumps
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
                  <div className="w-[3px] h-[3px] relative rounded-[50%] bg-fg-secondary" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[21.5px] px-0 pb-0 text-sm text-fg-secondary">
              <div className="relative tracking-[0.03em] inline-block min-w-[75px]">
                Travis Scott
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[4px]">
          <img
            className="h-10 w-10 relative rounded-81xl object-contain"
            alt=""
            src="/friend1@2x.png"
          />
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start py-0 px-2">
              <div className="relative tracking-[0.03em] inline-block min-w-[119px]">
                AverageMusicEnjoyer
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[10px] text-sm">
              <div className="flex flex-row items-start justify-start gap-[3px]">
                <img
                  className="h-[30px] w-[30px] relative"
                  alt=""
                  src="/icons-big64.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                  <div className="relative tracking-[0.03em] inline-block min-w-[65px]">
                    Get Lucky
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
                <div className="w-[3px] h-[3px] relative rounded-[50%] bg-fg-secondary" />
              </div>
              <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 text-fg-secondary">
                <div className="relative tracking-[0.03em] inline-block min-w-[64px]">
                  Daft Punk
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent17;
