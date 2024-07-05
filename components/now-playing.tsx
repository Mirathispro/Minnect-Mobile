import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NowPlayingType = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const NowPlaying: NextPage<NowPlayingType> = ({ className = "", propTop }) => {
  const nowPlayingStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[182px] left-[0px] rounded-3xs w-full overflow-hidden flex flex-row items-start justify-start max-w-full z-[2] text-left text-sm text-fg-secondary font-small ${className}`}
      style={nowPlayingStyle}
    >
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
  );
};

export default NowPlaying;
