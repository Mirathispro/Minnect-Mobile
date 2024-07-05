import type { NextPage } from "next";

export type FirstContentRowType = {
  className?: string;
};

const FirstContentRow: NextPage<FirstContentRowType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-between py-0 pr-2 pl-0 gap-[20px] text-left text-xs text-fg-secondary font-small ${className}`}
    >
      <div className="w-40 flex flex-col items-start justify-end pt-0 px-0 pb-[2.6px] box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
          <div className="w-[54px] flex flex-col items-start justify-start gap-[11px]">
            <div className="self-stretch rounded-25xl flex flex-row items-start justify-start py-[5px] px-[11px] border-[2px] border-solid border-gray-600">
              <div className="relative tracking-[0.03em] inline-block min-w-[28px]">
                Rock
              </div>
            </div>
            <div className="w-[51px] h-[51px] relative rounded-10xs bg-cover bg-no-repeat bg-[top]">
              <img
                className="absolute top-[0px] left-[0px] rounded-10xs w-full h-full object-cover hidden"
                alt=""
                src="/playlist-selectors@2x.png"
              />
              <img
                className="absolute top-[0px] left-[0px] rounded-10xs w-full h-full object-cover z-[1]"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[76px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
              <div className="flex-1 rounded-25xl flex flex-row items-start justify-start py-[5px] pr-[9px] pl-3 border-[2px] border-solid border-gray-600">
                <div className="relative tracking-[0.03em] inline-block min-w-[47px]">
                  Alt Rock
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[3px] text-sm text-fg-primary">
              <div className="relative tracking-[0.03em] inline-block min-w-[98px] whitespace-nowrap">
                Linkin Park Mix
              </div>
              <div className="relative tracking-[0.03em] text-fg-secondary inline-block min-w-[45px]">
                Spotify
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end gap-[20px]">
        <div className="flex flex-col items-center justify-end">
          <div className="flex flex-col items-center justify-end">
            <img
              className="w-10 h-[41px] relative rounded-81xl object-cover"
              alt=""
              src="/rectangle-6@2x.png"
            />
            <img
              className="w-6 h-6 relative z-[1] mt-[-15px]"
              alt=""
              src="/icons1.svg"
            />
          </div>
          <div className="relative tracking-[0.03em] inline-block min-w-[18px]">
            8M
          </div>
        </div>
        <div className="flex flex-col items-center justify-end">
          <img
            className="w-[40.4px] h-[40.4px] relative"
            alt=""
            src="/icons-big21.svg"
          />
          <div className="relative tracking-[0.03em] inline-block min-w-[32px]">
            500K
          </div>
        </div>
        <img
          className="w-[40.4px] h-[40.4px] relative"
          alt=""
          src="/icons-big22.svg"
        />
        <img
          className="w-[40.4px] h-[40.4px] relative"
          alt=""
          src="/icons-big19.svg"
        />
        <img
          className="w-[40.4px] h-[40.4px] relative"
          alt=""
          src="/icons-big20.svg"
        />
      </div>
    </div>
  );
};

export default FirstContentRow;
