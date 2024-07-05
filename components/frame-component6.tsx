import type { NextPage } from "next";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[181.1px] w-[140.3px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[10.7px] box-border gap-[5.8px] text-left text-xs-6 text-fg-primary font-small ${className}`}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[0.8px] shrink-0">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[15px]">
          <div className="h-[2.5px] flex-1 relative rounded-t-[5.98px] rounded-b-none bg-pink-600" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-[7px]">
          <div className="h-[5px] flex-1 relative rounded-t-[5.98px] rounded-b-none bg-pink-700" />
        </div>
        <div className="rounded-[5.98px] overflow-hidden flex flex-row items-start justify-start pt-[0.3px] px-0 pb-0 bg-[url('/image-16@2x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="h-[140.3px] w-[140.3px] relative object-cover hidden min-h-[140px]"
            alt=""
            src="/image-16@2x.png"
          />
          <img
            className="h-[140.3px] w-[140.3px] relative object-cover z-[1]"
            alt=""
            src="/image-4@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch h-4 flex flex-row items-start justify-start gap-[26.3px] shrink-0">
        <div className="self-stretch flex-1 relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          Happy Mix
        </div>
        <div className="self-stretch w-[15px] relative tracking-[0.03em] text-pink-100 inline-block">
          50
        </div>
      </div>
      <div className="self-stretch h-[26px] relative text-3xs-9 tracking-[0.03em] text-fg-secondary inline-block shrink-0">
        The Turtles, Van Morrison, ABBA and more
      </div>
    </div>
  );
};

export default FrameComponent6;
