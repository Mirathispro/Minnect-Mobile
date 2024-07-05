import type { NextPage } from "next";

export type GroupComponentType = {
  className?: string;
  frame8?: string;
  anythingGoes?: string;
  emmaChamberlain?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  frame8,
  anythingGoes,
  emmaChamberlain,
}) => {
  return (
    <div
      className={`w-[140px] shrink-0 flex flex-col items-start justify-start gap-[5px] text-left text-xs text-fg-primary font-small ${className}`}
    >
      <img
        className="w-[140px] h-[140px] relative rounded-7xs overflow-hidden shrink-0 object-cover"
        alt=""
        src={frame8}
      />
      <div className="self-stretch rounded-7xs bg-darkseagreen-700 overflow-hidden flex flex-row items-start justify-start py-0 pr-1.5 pl-0 gap-[6px]">
        <div className="h-[47px] w-[140px] relative bg-darkseagreen-700 hidden" />
        <div className="h-[47px] w-[3px] relative bg-darkseagreen-600 z-[1]" />
        <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="w-[89px] h-4 relative tracking-[0.03em] inline-block z-[1]">
              {anythingGoes}
            </div>
            <div className="self-stretch h-3.5 relative text-3xs tracking-[0.03em] text-fg-secondary inline-block z-[1]">
              {emmaChamberlain}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
