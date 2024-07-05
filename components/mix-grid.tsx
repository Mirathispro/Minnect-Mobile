import type { NextPage } from "next";

export type MixGridType = {
  className?: string;
};

const MixGrid: NextPage<MixGridType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[141.1px] shrink-0 flex flex-col items-start justify-start gap-[5.8px] text-left text-xs-6 text-fg-primary font-small ${className}`}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[0.8px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[15px]">
          <div className="h-[2.5px] flex-1 relative rounded-t-[6.02px] rounded-b-none bg-palevioletred-500" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-[7px]">
          <div className="h-[5px] flex-1 relative rounded-t-[6.02px] rounded-b-none bg-palevioletred-600" />
        </div>
        <div className="rounded-[6.02px] overflow-hidden flex flex-row items-start justify-start pt-[0.3px] px-0 pb-0 relative bg-[url('/image-3@2x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="h-[141.1px] w-[141.1px] relative object-cover hidden min-h-[141px] z-[0]"
            alt=""
            src="/image-3@2x.png"
          />
          <div className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.3px] left-[0px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
              alt=""
              src="/image-6@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[2]"
              alt=""
              src="/image-7@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[3]"
              alt=""
              src="/image-8@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[4]"
              alt=""
              src="/image-9@2x.png"
            />
          </div>
          <img
            className="h-[141.1px] w-[141.1px] relative object-cover z-[5]"
            alt=""
            src="/image-10@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch h-4 flex flex-row items-start justify-start gap-[25.5px]">
        <div className="self-stretch flex-1 relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          Daily Mix 4
        </div>
        <div className="self-stretch w-4 relative tracking-[0.03em] text-palevioletred-100 inline-block">
          50
        </div>
      </div>
      <div className="self-stretch h-[26px] relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
        Chuck Berry, Elvis Presley, Roy Orbison and more
      </div>
    </div>
  );
};

export default MixGrid;
