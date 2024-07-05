import type { NextPage } from "next";
import MobileMenu from "./mobile-menu";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[181.1px] w-[454.9px] relative shrink-0 max-w-[117%] text-left text-xs-6 text-fg-primary font-small ${className}`}
    >
      <div className="absolute top-[0px] left-[16px] w-[140.3px] flex flex-col items-start justify-start pt-0 px-0 pb-[6.1px] box-border gap-[5px]">
        <div className="self-stretch h-[149.4px] flex flex-col items-end justify-start pt-0 px-0 pb-[141.1px] box-border gap-[0.8px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[15px]">
            <div className="h-[2.5px] flex-1 relative rounded-t-[5.98px] rounded-b-none bg-yellowgreen-300" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-[7px]">
            <div className="h-[5px] flex-1 relative rounded-t-[5.98px] rounded-b-none bg-yellowgreen-400" />
          </div>
          <img
            className="w-[140.3px] h-[140.3px] relative rounded-[5.98px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-8@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6.6px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[26.3px]">
            <div className="flex-1 relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
              Rock Mix
            </div>
            <div className="relative text-sm tracking-[0.03em] text-yellowgreen-100 inline-block min-w-[15px]">
              50
            </div>
          </div>
          <div className="self-stretch relative text-xs tracking-[0.03em] text-fg-secondary">
            Red Hot Chili Peppers, R.E.M., Guns N’ Roses...
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[180.6px] rounded-t-[5.98px] rounded-b-none bg-gold-300 w-[109.8px] h-[2.5px]" />
      <div className="absolute top-[3.3px] left-[171.9px] rounded-t-[5.98px] rounded-b-none bg-gold-400 w-[127.1px] h-[5px]" />
      <div className="absolute top-[154.4px] left-[314.6px] w-[140.3px] h-4 flex flex-row items-start justify-start gap-[26.3px]">
        <div className="flex-1 relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          Pop Mix
        </div>
        <div className="self-stretch w-[15px] relative tracking-[0.03em] text-paleturquoise-100 inline-block">
          50
        </div>
      </div>
      <div className="absolute top-[0px] left-[329.9px] rounded-t-[5.98px] rounded-b-none bg-paleturquoise-700 w-[109.8px] h-[2.5px]" />
      <div className="absolute top-[3.3px] left-[321.2px] rounded-t-[5.98px] rounded-b-none bg-paleturquoise-800 w-[127.1px] h-[5px]" />
      <div className="absolute top-[86.1px] left-[0px] w-[390px] flex flex-row items-start justify-start max-w-full text-fg-secondary">
        <div className="w-[140.3px] !m-[0] absolute right-[84.4px] bottom-[10.7px] flex flex-row items-start justify-start gap-[26.3px] text-fg-primary">
          <div className="flex-1 relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            Chill Mix
          </div>
          <div className="relative tracking-[0.03em] text-gold-100 inline-block min-w-[15px] shrink-0">
            50
          </div>
        </div>
        <div className="w-[140.3px] absolute !m-[0] right-[84.4px] bottom-[-21.9px] text-3xs-9 tracking-[0.03em] inline-block">
          MF DOOM, Daft Punk, The Chainsmokers, and more
        </div>
        <MobileMenu
          iconsBig="/icons-big.svg"
          iconsBig1="/icons-big1.svg"
          iconsBig2="/icons-big2.svg"
          iconsBig3="/icons-big3.svg"
        />
      </div>
      <div className="absolute top-[25.1px] left-[8px] rounded-3xs w-[375px] overflow-hidden flex flex-row items-start justify-start max-w-full z-[2] text-sm text-fg-secondary">
        <div className="h-[61px] flex-1 relative rounded-3xs bg-darkslategray-200 max-w-full">
          <img
            className="absolute bottom-[2px] left-[calc(50%_-_178.5px)] w-[357px] h-0"
            alt=""
            src="/group-5.svg"
          />
          <img
            className="absolute top-[calc(50%_-_20.5px)] left-[324px] w-[40.4px] h-[40.4px] z-[1]"
            alt=""
            src="/icons-big5.svg"
          />
          <img
            className="absolute top-[calc(50%_-_20.5px)] left-[282px] w-[40.4px] h-[40.4px] z-[1]"
            alt=""
            src="/icons-big6.svg"
          />
          <div className="absolute top-[8px] left-[8px] w-[347px] flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-[43px] w-[43px] relative rounded-10xs object-cover min-h-[43px]"
              alt=""
              src="/hero-images@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                <div className="self-stretch relative tracking-[0.03em] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#dbdbdb_54.54%,_#333842_65.56%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] overflow-hidden text-ellipsis whitespace-nowrap">
                  Get Lucky (feat. Pharrell Williams and Nile Rodgers)
                </div>
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

export default FrameComponent8;
