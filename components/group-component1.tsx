import type { NextPage } from "next";

export type GroupComponent1Type = {
  className?: string;
  artistItems?: string;
  gunsNRoses?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  className = "",
  artistItems,
  gunsNRoses,
}) => {
  return (
    <div
      className={`w-[140px] shrink-0 flex flex-col items-start justify-start gap-[10px] text-left text-xs text-fg-primary font-small ${className}`}
    >
      <img
        className="w-[140px] h-[140px] relative rounded-81xl overflow-hidden shrink-0 object-cover"
        alt=""
        src={artistItems}
      />
      <div className="self-stretch h-4 flex flex-row items-start justify-start py-0 pr-[29px] pl-[30px] box-border">
        <div className="self-stretch flex-1 relative tracking-[0.03em]">
          {gunsNRoses}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
