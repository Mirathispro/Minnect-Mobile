import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type FrameComponent15Type = {
  className?: string;
};

const FrameComponent15: NextPage<FrameComponent15Type> = ({
  className = "",
}) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/library-list");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-[9px] pl-[15px] box-border max-w-full text-left text-sm text-gray-700 font-small ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-px box-border gap-[10.6px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[19px]">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border min-w-[199px]">
            <div className="self-stretch rounded-3xs bg-gray-500 overflow-hidden flex flex-row items-start justify-between py-0 px-2 gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-[8.2px] px-0 pb-0">
                <div className="relative tracking-[0.03em] font-medium inline-block min-w-[93px]">
                  Search library
                </div>
              </div>
              <img
                className="h-[35.4px] w-[35.4px] relative"
                alt=""
                src="/icons-big7.svg"
              />
            </div>
          </div>
          <img
            className="h-[40.4px] w-[40.4px] relative"
            alt=""
            src="/icons-big9.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[32.6px] text-fg-secondary">
          <div className="flex flex-row items-start justify-start gap-[5px]">
            <img
              className="h-[40.4px] w-[40.4px] relative object-contain"
              alt=""
              src="/icons-big26.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[10.7px] px-0 pb-0">
              <div className="relative tracking-[0.03em] inline-block min-w-[41px]">
                Group
              </div>
            </div>
          </div>
          <div
            className="flex flex-row items-start justify-start gap-[5px] cursor-pointer"
            onClick={onFrameContainerClick}
          >
            <div className="flex flex-col items-start justify-start pt-[10.7px] px-0 pb-0">
              <div className="relative tracking-[0.03em] inline-block min-w-[52px]">
                Recents
              </div>
            </div>
            <div className="h-[40.4px] w-[40.4px] relative">
              <div className="absolute top-[10.3px] left-[10.3px] w-5 h-5">
                <div className="absolute top-[11.8px] left-[0px] rounded-sm box-border w-[10.2px] h-[10.2px] border-[2px] border-solid border-fg-secondary" />
                <div className="absolute top-[0px] left-[0px] rounded-sm box-border w-[10.2px] h-[10.2px] border-[2px] border-solid border-fg-secondary" />
                <div className="absolute top-[11.8px] left-[11.9px] rounded-sm box-border w-[10.2px] h-[10.2px] border-[2px] border-solid border-fg-secondary" />
                <div className="absolute top-[0px] left-[11.9px] rounded-sm box-border w-[10.2px] h-[10.2px] border-[2px] border-solid border-fg-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent15;
