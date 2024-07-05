import type { NextPage } from "next";
import AudiobookCards from "./audiobook-cards";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[15px] gap-[15px] shrink-0 text-left text-xl text-fg-primary font-small ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0 pl-4 gap-[20px]">
        <b className="h-[27px] w-[191px] relative tracking-[0.03em] inline-block">
          Audiobooks for you
        </b>
        <img
          className="self-stretch w-10 relative max-h-full min-h-[27px]"
          alt=""
          src="/homemore.svg"
        />
      </div>
      <div className="h-[229px] overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-0 pb-2 pr-0 pl-[15px] box-border gap-[10px] text-xs">
        <AudiobookCards
          frame8="/frame-8@2x.png"
          haloTheFlood="Halo: The Flood"
          williamCDietz="William C. Dietz"
        />
        <AudiobookCards
          frame8="/frame-8@2x.png"
          haloTheFlood="Halo: First Strike"
          williamCDietz="Eric Nylund"
          propWidth="140px"
        />
        <AudiobookCards
          frame8="/frame-8@2x.png"
          haloTheFlood="Halo: Ghosts of Onyx"
          williamCDietz="Eric Nylund"
          propWidth="75px"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
