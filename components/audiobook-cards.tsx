import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type AudiobookCardsType = {
  className?: string;
  frame8?: string;
  haloTheFlood?: string;
  williamCDietz?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const AudiobookCards: NextPage<AudiobookCardsType> = ({
  className = "",
  frame8,
  haloTheFlood,
  williamCDietz,
  propWidth,
}) => {
  const audiobookCardsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch w-[140px] shrink-0 flex flex-row items-end justify-start py-0 pr-[21px] pl-0 box-border text-left text-xs text-fg-primary font-small ${className}`}
      style={audiobookCardsStyle}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start">
        <img
          className="self-stretch h-[180px] relative rounded-7xs max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src={frame8}
        />
      </div>
      <div className="w-[119px] flex flex-col items-start justify-start gap-[2px] ml-[-140px]">
        <div className="w-[111px] flex flex-row items-start justify-start gap-[2px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/icons.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="self-stretch h-4 relative tracking-[0.03em] inline-block">
              {haloTheFlood}
            </div>
          </div>
        </div>
        <div className="self-stretch h-3.5 relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
          {williamCDietz}
        </div>
      </div>
    </div>
  );
};

export default AudiobookCards;
