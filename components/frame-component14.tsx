import type { NextPage } from "next";
import NowPlaying from "./now-playing";

export type FrameComponent14Type = {
  className?: string;
};

const FrameComponent14: NextPage<FrameComponent14Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch h-[156px] relative max-w-full text-left text-xl text-white font-satoshi ${className}`}
    >
      <div className="absolute top-[30.2px] left-[7px] w-[351px] h-[437.2px] overflow-x-auto flex flex-row flex-wrap items-start justify-between">
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[0px] left-[0px] rounded-3xs bg-green overflow-hidden shrink-0 flex flex-col items-start justify-start p-5 box-border">
          <img
            className="w-[142.4px] h-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="relative tracking-[0.03em] font-black inline-block min-w-[37.9px] z-[1]">
            Pop
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[0px] left-[181px] rounded-3xs bg-orangered overflow-hidden shrink-0 flex flex-col items-start justify-start p-5 box-border">
          <img
            className="w-[142.4px] h-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="relative tracking-[0.03em] font-black inline-block min-w-[81.9px] z-[1]">
            Country
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[112.3px] left-[0px] rounded-3xs bg-dimgray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[87px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Hip-Hop
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[112.3px] left-[181px] rounded-3xs bg-teal overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[50px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Rock
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[224.7px] left-[0px] rounded-3xs bg-crimson-500 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[51px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Indie
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[224.7px] left-[181px] rounded-3xs bg-darkslateblue-100 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[51px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Punk
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[337.1px] left-[0px] rounded-3xs bg-crimson-500 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[57px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Metal
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[337.1px] left-[181px] rounded-3xs bg-steelblue-100 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] flex-1 relative tracking-[0.03em] font-black inline-block z-[1]">
            Instrumental
          </div>
        </div>
      </div>
      <NowPlaying propTop="0px" />
    </div>
  );
};

export default FrameComponent14;
