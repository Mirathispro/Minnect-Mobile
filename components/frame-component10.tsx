import type { NextPage } from "next";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[141.1px] shrink-0 flex flex-col items-start justify-start gap-[5.8px] text-left text-xs-6 text-fg-primary font-small ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.8px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px]">
          <div className="h-[2.5px] flex-1 relative rounded-t-[6.02px] rounded-b-none bg-darkseagreen-400" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-1.5">
          <div className="h-[5px] flex-1 relative rounded-t-[6.02px] rounded-b-none bg-darkseagreen-500" />
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
          </div>
          <img
            className="h-[141.1px] w-[141.1px] relative object-cover z-[4]"
            alt=""
            src="/image-9@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch h-4 flex flex-row items-start justify-start gap-[25.4px]">
        <div className="self-stretch flex-1 relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          Daily Mix 3
        </div>
        <div className="self-stretch w-4 relative tracking-[0.03em] text-darkseagreen-100 inline-block">
          50
        </div>
      </div>
      <div className="self-stretch h-[26px] relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
        The Strokes, Martin Garrix, MGMT and more
      </div>
    </div>
  );
};

export default FrameComponent10;
