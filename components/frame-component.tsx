import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[15px] shrink-0 max-w-full text-left text-xl text-fg-primary font-small ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0 pl-4 gap-[20px]">
        <b className="h-[27px] w-[155px] relative tracking-[0.03em] inline-block">
          Popular Albums
        </b>
        <img
          className="self-stretch w-10 relative max-h-full min-h-[27px]"
          alt=""
          src="/homemore.svg"
        />
      </div>
      <div className="w-[390px] overflow-x-auto flex flex-row items-start justify-start pt-0 px-[15px] pb-[22px] box-border gap-[10px] max-w-full text-xs">
        <div className="w-[140px] shrink-0 flex flex-col items-start justify-start gap-[5.5px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5">
              <div className="h-1.5 flex-1 relative rounded-t-7xs rounded-b-none bg-thistle" />
            </div>
            <img
              className="w-[140px] h-[140px] relative rounded-7xs overflow-hidden shrink-0 object-cover"
              alt=""
              src="/placeholder@2x.png"
            />
          </div>
          <div className="w-[129px] h-4 relative tracking-[0.03em] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
            Random Access Memories
          </div>
          <div className="w-[125px] h-3.5 relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
            Daft Punk
          </div>
        </div>
        <div className="w-[140px] shrink-0 flex flex-col items-start justify-start gap-[1.4px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5">
            <div className="h-[5.6px] flex-1 relative rounded-t-7xs rounded-b-none bg-cadetblue" />
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3.6px]">
            <img
              className="h-[140px] w-[140px] relative rounded-7xs overflow-hidden shrink-0 object-cover"
              alt=""
              src="/secondary@2x.png"
            />
          </div>
          <div className="w-[88px] h-[20.6px] flex flex-row items-start justify-start pt-0 pb-[4.6px] pr-5 pl-0 box-border">
            <div className="self-stretch flex-1 relative tracking-[0.03em]">
              Abbey Road
            </div>
          </div>
          <div className="w-[125px] h-3.5 relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
            The Beatles
          </div>
        </div>
        <div className="w-[140px] shrink-0 flex flex-col items-start justify-start gap-[3.2px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5">
            <div className="h-[5.6px] flex-1 relative rounded-t-7xs rounded-b-none bg-steelblue-300" />
          </div>
          <img
            className="w-[140px] h-[140px] relative rounded-7xs overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-8@2x.png"
          />
          <div className="w-[95px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[6px]">
            <div className="self-stretch h-4 relative tracking-[0.03em] inline-block">
              Black Holes...
            </div>
            <div className="w-[125px] h-3.5 relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
              Muse
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
