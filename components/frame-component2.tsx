import type { NextPage } from "next";
import GroupComponent1 from "./group-component1";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[15px] box-border gap-[15px] shrink-0 max-w-full text-left text-xl text-fg-primary font-small ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0 pl-4 gap-[20px]">
        <b className="h-[27px] w-[191px] relative tracking-[0.03em] inline-block">
          Your favorite artists
        </b>
        <img
          className="self-stretch w-10 relative max-h-full min-h-[27px]"
          alt=""
          src="/homemore.svg"
        />
      </div>
      <div className="w-[390px] overflow-x-auto flex flex-row items-start justify-start pt-0 px-[15px] pb-[7px] box-border gap-[10px] max-w-full text-xs">
        <GroupComponent1
          artistItems="/artist-items@2x.png"
          gunsNRoses="Guns N’ Roses"
        />
        <GroupComponent1 artistItems="/frame-8@2x.png" gunsNRoses="Daft Punk" />
        <GroupComponent1
          artistItems="/frame-8@2x.png"
          gunsNRoses="David Bowie"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
