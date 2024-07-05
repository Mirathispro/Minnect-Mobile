import type { NextPage } from "next";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[181.1px] w-[140.3px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[10.7px] box-border gap-[0.8px] text-left text-xs-6 text-fg-primary font-small ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-1.5">
        <div className="flex-1 flex flex-col items-end justify-start gap-[0.8px] shrink-0">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-[9px]">
            <div className="h-[2.5px] flex-1 relative rounded-t-[5.98px] rounded-b-none bg-seagreen-300" />
          </div>
          <div className="self-stretch h-[5px] relative rounded-t-[5.98px] rounded-b-none bg-seagreen-400" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[4.2px]">
        <div className="rounded-[5.98px] overflow-hidden flex flex-row items-start justify-start pt-[0.3px] px-0 pb-0 relative bg-[url('/image-16@2x.png')] bg-cover bg-no-repeat bg-[top] shrink-0">
          <img
            className="h-[140.3px] w-[140.3px] relative object-cover hidden min-h-[140px] z-[0]"
            alt=""
            src="/image-16@2x.png"
          />
          <div className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.3px] left-[0px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
              alt=""
              src="/image-4@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[2]"
              alt=""
              src="/image-17@2x.png"
            />
          </div>
          <img
            className="h-[140.3px] w-[140.3px] relative object-cover z-[3]"
            alt=""
            src="/image-18@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch h-[21.8px] flex flex-row items-start justify-start pt-0 px-0 pb-[5.8px] box-border shrink-0">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[26.3px] shrink-0">
          <div className="self-stretch flex-1 relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            Upbeat Mix
          </div>
          <div className="self-stretch w-[15px] relative tracking-[0.03em] text-seagreen-100 inline-block">
            50
          </div>
        </div>
      </div>
      <div className="self-stretch h-[26px] relative text-3xs-9 tracking-[0.03em] text-fg-secondary inline-block shrink-0">
        Kylie Minogue, Charli XCX, Cage The Elephant and...
      </div>
    </div>
  );
};

export default FrameComponent4;
