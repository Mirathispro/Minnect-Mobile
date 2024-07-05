import type { NextPage } from "next";
import GroupComponent from "./group-component";

export type Menu1Type = {
  className?: string;
};

const Menu1: NextPage<Menu1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full shrink-0 text-left text-xs text-fg-primary font-small ${className}`}
    >
      <div className="w-[390px] overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-[7px] px-[15px] pb-[11px] box-border gap-[10px] max-w-full">
        <GroupComponent
          frame8="/frame-8@2x.png"
          anythingGoes="anything goes..."
          emmaChamberlain="emma chamberlain"
        />
        <GroupComponent
          frame8="/frame-8@2x.png"
          anythingGoes="The Joe Rogan..."
          emmaChamberlain="Joe Rogan"
        />
        <GroupComponent
          frame8="/frame-8@2x.png"
          anythingGoes="The Journal"
          emmaChamberlain="The Wall Street Journal"
        />
      </div>
    </div>
  );
};

export default Menu1;
