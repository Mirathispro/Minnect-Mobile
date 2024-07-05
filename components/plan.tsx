import type { NextPage } from "next";

export type PlanType = {
  className?: string;
};

const Plan: NextPage<PlanType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-3.5 pl-[15px] box-border max-w-full text-left text-xs text-fg-primary font-small ${className}`}
    >
      <div className="flex-1 rounded-xl [background:linear-gradient(180deg,_#10301b,_#111)] box-border flex flex-col items-start justify-start pt-[13px] px-[21px] pb-[18px] gap-[20px] max-w-full border-[2px] border-solid border-gray-300">
        <div className="flex flex-row items-start justify-start gap-[13px]">
          <img
            className="h-5 w-5 relative object-cover min-h-[20px]"
            alt=""
            src="/image-22@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative tracking-[0.03em] font-medium inline-block min-w-[73px]">
              Current Plan
            </div>
          </div>
        </div>
        <div className="w-[179px] flex flex-col items-start justify-start gap-[5px] text-lg text-primary">
          <div className="self-stretch relative tracking-[0.03em] font-medium">
            Premium - Individual
          </div>
          <div className="relative text-sm tracking-[0.03em] text-fg-primary inline-block min-w-[100px]">
            $10.99 / month
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
