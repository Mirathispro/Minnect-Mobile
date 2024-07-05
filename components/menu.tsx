import type { NextPage } from "next";

export type MenuType = {
  className?: string;
};

const Menu: NextPage<MenuType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[225px] shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full text-left text-xs text-fg-primary font-small ${className}`}
    >
      <div className="self-stretch overflow-x-auto flex flex-row items-start justify-start pt-[7px] pb-[11px] pr-0 pl-[15px] box-border gap-[10px] shrink-0 max-w-full">
        <div className="self-stretch w-[140px] shrink-0 flex flex-row items-end justify-start">
          <div className="flex-1 rounded-7xs bg-darkseagreen-700 overflow-hidden flex flex-col items-start justify-start pt-0.5 px-[5px] pb-[7px]">
            <div className="w-[140px] h-[47px] relative bg-darkseagreen-700 hidden" />
            <div className="w-[117px] flex flex-row items-start justify-start gap-[4px]">
              <div className="h-6 w-6 relative z-[1]">
                <div className="absolute top-[17.9px] left-[5px] w-3.5 h-[11.3px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[2.67px] box-border w-full h-full border-[1.2px] border-solid border-darkseagreen-200" />
                  <img
                    className="absolute top-[3.3px] left-[5.3px] rounded-[0.33px] w-[4.7px] h-[4.7px] z-[1]"
                    alt=""
                    src="/vector-36.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="self-stretch h-4 relative tracking-[0.03em] inline-block z-[1]">
                  anything goes...
                </div>
              </div>
            </div>
            <div className="w-[82px] h-3.5 flex flex-row items-start justify-start py-0 px-1 box-border text-3xs text-fg-secondary">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[4px]">
                <div className="self-stretch flex-1 relative tracking-[0.03em] z-[1]">
                  Apr 28
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="w-0.5 h-0.5 relative rounded-[50%] bg-fg-secondary z-[1]" />
                  </div>
                  <div className="self-stretch flex-1 relative tracking-[0.03em] z-[1]">
                    53 min
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start ml-[-140px]">
            <img
              className="w-[140px] h-[140px] relative rounded-7xs overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-8@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch w-[140px] shrink-0 flex flex-row items-end justify-start">
          <div className="h-[47px] flex-1 rounded-7xs bg-peachpuff-200 overflow-hidden flex flex-col items-start justify-start pt-1 px-[9px] pb-[7px] box-border gap-[6px]">
            <div className="w-[140px] h-[47px] relative bg-peachpuff-200 hidden" />
            <div className="w-[95px] h-4 relative tracking-[0.03em] inline-block z-[1]">
              The Joe Rogan...
            </div>
            <div className="w-[74px] flex-1 flex flex-row items-start justify-start gap-[4px] text-3xs text-fg-secondary">
              <div className="self-stretch flex-1 relative tracking-[0.03em] z-[1]">
                Apr 28
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <div className="w-0.5 h-0.5 relative rounded-[50%] bg-fg-secondary z-[1]" />
                </div>
                <div className="self-stretch flex-1 relative tracking-[0.03em] z-[1]">
                  53 min
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start ml-[-140px]">
            <img
              className="w-[140px] h-[140px] relative rounded-7xs overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-8@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch w-[75px] shrink-0 flex flex-row items-end justify-start py-0 px-0 box-border text-3xs text-fg-secondary">
          <div className="self-stretch flex flex-col items-start justify-start">
            <img
              className="w-[140px] h-[140px] relative rounded-7xs overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-8@2x.png"
            />
          </div>
          <div className="w-[140px] rounded-7xs bg-coral-200 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-1 px-[9px] pb-[7px] box-border relative gap-[6px] ml-[-140px]">
            <div className="w-[140px] h-[47px] relative bg-coral-200 hidden z-[0]" />
            <div className="w-[66px] h-4 relative text-xs tracking-[0.03em] text-fg-primary inline-block z-[1]">
              The Journal
            </div>
            <div className="h-3.5 !m-[0] absolute bottom-[7px] left-[45px] flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border">
              <div className="self-stretch w-8 relative tracking-[0.03em] inline-block shrink-0 z-[1]">
                53 min
              </div>
              <div className="h-0.5 w-0.5 absolute !m-[0] bottom-[5px] left-[0px] rounded-[50%] bg-fg-secondary z-[1]" />
            </div>
            <div className="w-8 h-3.5 relative tracking-[0.03em] inline-block z-[1]">
              Apr 28
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
