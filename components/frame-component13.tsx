import type { NextPage } from "next";

export type FrameComponent13Type = {
  className?: string;
  iconsBig?: string;
  iconsBig1?: string;
};

const FrameComponent13: NextPage<FrameComponent13Type> = ({
  className = "",
  iconsBig,
  iconsBig1,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-between py-0 pr-2 pl-0 gap-[20px] text-left text-xs text-fg-secondary font-small ${className}`}
    >
      <div className="w-[127px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.6px] box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[3px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[11px]">
            <div className="self-stretch h-8 rounded-25xl box-border flex flex-row items-start justify-start py-2 px-[11px] border-[2px] border-solid border-gray-600">
              <div className="self-stretch w-[33px] relative tracking-[0.03em] inline-block">
                Funky
              </div>
            </div>
            <img
              className="w-[51px] h-[51px] relative rounded-10xs object-cover"
              alt=""
              src="/playlist-selectors@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[16px]">
            <div className="self-stretch h-8 flex flex-row items-start justify-end py-0 pr-[5px] pl-[7px] box-border">
              <div className="self-stretch flex-1 rounded-25xl flex flex-row items-start justify-start py-2 pr-[9px] pl-3 border-[2px] border-solid border-gray-600">
                <div className="self-stretch w-7 relative tracking-[0.03em] inline-block">
                  EDM
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[3px] text-sm text-fg-primary">
              <div className="self-stretch h-[19px] relative tracking-[0.03em] inline-block">
                Get Lucky
              </div>
              <div className="self-stretch h-[19px] relative tracking-[0.03em] text-fg-secondary inline-block">
                Daft Punk
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
            src={iconsBig}
          />
          <div className="w-8 h-4 relative tracking-[0.03em] inline-block">
            500K
          </div>
        </div>
        <img
          className="w-[40.4px] h-[40.4px] relative"
          alt=""
          src={iconsBig1}
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
  );
};

export default FrameComponent13;
