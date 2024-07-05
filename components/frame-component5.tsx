import type { NextPage } from "next";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[181.1px] w-[140.3px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[10.7px] box-border gap-[5.8px] text-left text-xs-6 text-fg-primary font-small ${className}`}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[0.8px] shrink-0">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[15px]">
          <div className="h-[2.5px] flex-1 relative rounded-t-[5.98px] rounded-b-none bg-sandybrown-200" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-[7px]">
          <div className="h-[5px] flex-1 relative rounded-t-[5.98px] rounded-b-none bg-sandybrown-300" />
        </div>
        <div className="self-stretch h-[140.3px] relative rounded-[5.98px] overflow-hidden shrink-0 bg-[url('/image-16@2x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
            alt=""
            src="/image-16@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_69.95px)] left-[calc(50%_-_70.15px)] w-full h-full object-cover z-[1]"
            alt=""
            src="/image-4@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_69.95px)] left-[calc(50%_-_70.15px)] w-full h-full object-cover z-[2]"
            alt=""
            src="/image-17@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch h-4 flex flex-row items-start justify-start gap-[26.3px] shrink-0">
        <div className="self-stretch flex-1 relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          David Bowie Mix
        </div>
        <div className="self-stretch w-[15px] relative tracking-[0.03em] text-sandybrown-100 inline-block">
          50
        </div>
      </div>
      <div className="self-stretch h-[26px] relative text-3xs-9 tracking-[0.03em] text-fg-secondary inline-block shrink-0">
        Soft Cell, The Who and The Clash
      </div>
    </div>
  );
};

export default FrameComponent5;
