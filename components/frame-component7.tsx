import type { NextPage } from "next";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[181.1px] w-[140.3px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[10.7px] box-border gap-[5.8px] text-left text-xs-6 text-fg-primary font-small ${className}`}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[0.8px] shrink-0">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[15px]">
          <div className="h-[2.5px] flex-1 relative rounded-t-[5.98px] rounded-b-none bg-royalblue-300" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-[7px]">
          <div className="h-[5px] flex-1 relative rounded-t-[5.98px] rounded-b-none bg-royalblue-400" />
        </div>
        <img
          className="w-[140.3px] h-[140.3px] relative rounded-[5.98px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-8@2x.png"
        />
      </div>
      <div className="self-stretch h-4 flex flex-row items-start justify-start gap-[26.3px] shrink-0">
        <div className="self-stretch flex-1 relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
          Daft Punk Mix
        </div>
        <div className="self-stretch w-[15px] relative tracking-[0.03em] text-royalblue-100 inline-block shrink-0">
          50
        </div>
      </div>
      <div className="self-stretch h-[26px] relative text-3xs-9 tracking-[0.03em] text-fg-secondary inline-block shrink-0">
        Daft Punk, MGMT, Muse, and more
      </div>
    </div>
  );
};

export default FrameComponent7;
