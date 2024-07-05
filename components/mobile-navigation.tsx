import type { NextPage } from "next";

export type MobileNavigationType = {
  className?: string;
};

const MobileNavigation: NextPage<MobileNavigationType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-[15px] pl-4 box-border max-w-full text-left text-base text-fg-primary font-small ${className}`}
    >
      <div className="h-[141.2px] flex-1 flex flex-col items-center justify-start gap-[5px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-[3px]">
          <div className="self-stretch flex flex-row items-center justify-between py-0 pr-px pl-0 gap-[10.78px]">
            <img
              className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
              alt=""
              src="/icons-big65.svg"
            />
            <div className="w-[158.8px] relative tracking-[0.03em] font-medium inline-block shrink-0">
              Listening history
            </div>
            <div className="flex flex-row items-center justify-end gap-[5px]">
              <img
                className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                alt=""
              />
              <img
                className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                alt=""
              />
              <img
                className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                alt=""
                src="/icons-big29.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-47.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-[3px]">
          <div className="self-stretch flex flex-row items-center justify-between py-0 pr-px pl-0 gap-[10.78px]">
            <img
              className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
              alt=""
              src="/icons-big68.svg"
            />
            <div className="w-[158.8px] relative tracking-[0.03em] font-medium inline-block shrink-0">
              Settings and privacy
            </div>
            <div className="flex flex-row items-center justify-end gap-[5px]">
              <img
                className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                alt=""
              />
              <img
                className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                alt=""
              />
              <img
                className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                alt=""
                src="/icons-big29.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-471.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-[3px]">
          <div className="self-stretch flex flex-row items-center justify-between py-0 pr-px pl-0 gap-[10.78px]">
            <img
              className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
              alt=""
              src="/icons-big71.svg"
            />
            <div className="w-[158.8px] relative tracking-[0.03em] font-medium inline-block shrink-0">
              What’s new
            </div>
            <div className="flex flex-row items-center justify-end gap-[5px]">
              <img
                className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                alt=""
              />
              <img
                className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                alt=""
              />
              <img
                className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                alt=""
                src="/icons-big29.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
