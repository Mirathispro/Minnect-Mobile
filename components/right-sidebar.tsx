import type { NextPage } from "next";

export type RightSidebarType = {
  className?: string;
};

const RightSidebar: NextPage<RightSidebarType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[91px] flex flex-row items-start justify-start pt-16 pb-0 px-0 box-border relative gap-[10px] shrink-0 max-w-full text-left text-sm text-fg-secondary font-small ${className}`}
    >
      <div className="mt-[-585px] w-[390px] flex flex-col items-start justify-start shrink-0 max-w-full text-xs">
        <div className="self-stretch rounded-3xs bg-bg-secondary flex flex-col items-start justify-end pt-[263px] px-3.5 pb-3.5 box-border relative gap-[11.4px] max-w-full">
          <div className="self-stretch flex flex-row items-end justify-between py-0 pr-2 pl-0 gap-[20px]">
            <div className="w-[127px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.6px] box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
                <div className="w-[122px] h-8 flex flex-row items-start justify-start gap-[10px]">
                  <div className="self-stretch flex-1 rounded-25xl flex flex-row items-start justify-start py-2 px-[11px] border-[2px] border-solid border-gray-600">
                    <div className="self-stretch w-[33px] relative tracking-[0.03em] inline-block">
                      Funky
                    </div>
                  </div>
                  <div className="self-stretch flex-1 rounded-25xl flex flex-row items-start justify-start py-2 pr-[9px] pl-3 border-[2px] border-solid border-gray-600">
                    <div className="self-stretch w-7 relative tracking-[0.03em] inline-block">
                      EDM
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[11px] text-sm text-fg-primary">
                  <img
                    className="h-[51px] w-[51px] relative rounded-10xs object-cover"
                    alt=""
                    src="/playlist-selectors@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="flex flex-col items-start justify-start gap-[3px]">
                      <div className="relative tracking-[0.03em] inline-block min-w-[65px]">
                        Get Lucky
                      </div>
                      <div className="relative tracking-[0.03em] text-fg-secondary inline-block min-w-[64px]">
                        Daft Punk
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end gap-[20px]">
              <div className="flex flex-col items-center justify-end">
                <div className="flex flex-col items-center justify-end">
                  <img
                    className="w-10 h-[41px] relative rounded-81xl object-cover"
                    alt=""
                    src="/second-vertical-separator@2x.png"
                  />
                  <img
                    className="w-6 h-6 relative z-[1] mt-[-15px]"
                    alt=""
                    src="/icons1.svg"
                  />
                </div>
                <div className="w-[18px] h-4 relative tracking-[0.03em] inline-block">
                  8M
                </div>
              </div>
              <div className="flex flex-col items-center justify-end">
                <img
                  className="w-[40.4px] h-[40.4px] relative"
                  alt=""
                  src="/icons-big17.svg"
                />
                <div className="w-8 h-4 relative tracking-[0.03em] inline-block">
                  500K
                </div>
              </div>
              <img
                className="w-[40.4px] h-[40.4px] relative"
                alt=""
                src="/icons-big18.svg"
              />
              <img
                className="w-[40.4px] h-[40.4px] relative"
                alt=""
                src="/icons-big19.svg"
              />
              <img
                className="w-[40.4px] h-[40.4px] relative"
                alt=""
                src="/icons-big20.svg"
              />
            </div>
          </div>
          <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 pr-0.5 pl-[3px] box-border max-w-full">
            <img
              className="flex-1 relative max-w-full overflow-clip max-h-[unset]"
              alt=""
              src="/group-51.svg"
            />
          </div>
          <div className="w-11 h-3.5 absolute !m-[0] right-[53px] bottom-[56px]">
            <img
              className="absolute top-[0px] left-[0px] w-[18px] h-3.5 z-[2]"
              alt=""
              src="/network.svg"
            />
            <img
              className="absolute top-[0px] left-[26px] w-[18px] h-3.5 z-[2]"
              alt=""
              src="/data.svg"
            />
          </div>
          <div className="w-[27px] h-3.5 absolute !m-[0] right-[18px] bottom-[56px] text-center text-2xs text-gray-200">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full mix-blend-normal z-[2]"
              alt=""
              src="/signal-bars.svg"
            />
            <div className="absolute top-[0px] left-[0px] bg-fg-secondary flex flex-row items-start justify-end py-0 pr-0 pl-1.5 z-[3]">
              <img
                className="h-3.5 w-[18px] relative hidden min-h-[14px]"
                alt=""
                src="/vector.svg"
              />
              <b className="w-3.5 relative tracking-[-0.5px] leading-[14px] inline-block min-w-[14px] z-[4]">
                78
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="w-14 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border shrink-0">
        <div className="w-[26px] h-[19px] relative tracking-[0.03em] font-medium inline-block shrink-0">
          Pop
        </div>
      </div>
      <div className="w-[35px] !m-[0] absolute top-[21px] left-[31px] flex flex-row items-start justify-start z-[2] text-center text-mid">
        <div className="flex-1 relative tracking-[-0.5px] leading-[14px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
          9:41
        </div>
      </div>
      <div className="h-[19px] w-[33px] relative tracking-[0.03em] font-medium inline-block shrink-0">
        Rock
      </div>
    </div>
  );
};

export default RightSidebar;
