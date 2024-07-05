import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type FrameComponent16Type = {
  className?: string;
  iconsBig5?: string;
  iconsBig6?: string;
};

const FrameComponent16: NextPage<FrameComponent16Type> = ({
  className = "",
  iconsBig5,
  iconsBig6,
}) => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onGroupContainerClick1 = useCallback(() => {
    router.push("/discover");
  }, [router]);

  const onGroupContainerClick2 = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onGroupContainerClick3 = useCallback(() => {
    router.push("/library");
  }, [router]);

  const onGroupContainerClick4 = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start max-w-full text-left text-sm text-fg-secondary font-small ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-2 box-border max-w-full">
        <div className="flex-1 rounded-3xs overflow-hidden flex flex-row items-start justify-start max-w-full">
          <div className="h-[61px] flex-1 relative rounded-3xs bg-darkslategray-200 max-w-full">
            <img
              className="absolute bottom-[2px] left-[calc(50%_-_178.5px)] w-[357px] h-0"
              alt=""
              src="/group-5.svg"
            />
            <img
              className="absolute top-[calc(50%_-_20.5px)] left-[324px] w-[40.4px] h-[40.4px] z-[1]"
              alt=""
              src="/icons-big5.svg"
            />
            <img
              className="absolute top-[calc(50%_-_20.5px)] left-[282px] w-[40.4px] h-[40.4px] z-[1]"
              alt=""
              src="/icons-big6.svg"
            />
            <div className="absolute top-[8px] left-[8px] w-[347px] flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-[43px] w-[43px] relative rounded-10xs object-cover min-h-[43px]"
                alt=""
                src="/hero-images@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                  <div className="self-stretch relative tracking-[0.03em] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#dbdbdb_54.54%,_#333842_65.56%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] overflow-hidden text-ellipsis whitespace-nowrap">
                    Get Lucky (feat. Pharrell Williams and Nile Rodgers)
                  </div>
                  <div className="relative tracking-[0.03em] inline-block min-w-[64px]">
                    Daft Punk
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-4 px-[27px] pb-6 box-border relative max-w-full text-xs">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(17,_17,_17,_0.85),_#111_42.62%)]" />
        <div className="flex-1 flex flex-row flex-wrap items-start justify-between max-w-full gap-[20px] z-[1]">
          <div
            className="flex flex-col items-start justify-start cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <img
              className="w-[40.4px] h-[40.4px] relative shrink-0"
              alt=""
              src="/icons-big15.svg"
            />
            <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-[3px] mt-[-1.4px]">
              <div className="relative tracking-[0.03em] inline-block min-w-[31.3px] shrink-0">
                Home
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-start cursor-pointer"
            onClick={onGroupContainerClick1}
          >
            <div className="h-[39px] flex flex-row items-start justify-start py-0 pr-[5px] pl-[3px] box-border">
              <img
                className="h-[40.4px] w-[40.4px] relative shrink-0"
                alt=""
                src="/icons-big1.svg"
              />
            </div>
            <div className="relative tracking-[0.03em] inline-block min-w-[48px] shrink-0">
              Discover
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-start cursor-pointer"
            onClick={onGroupContainerClick2}
          >
            <img
              className="w-[40.4px] h-[40.4px] relative shrink-0"
              alt=""
              src="/icons-big2.svg"
            />
            <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-px mt-[-1.4px]">
              <div className="relative tracking-[0.03em] inline-block min-w-[36.8px] shrink-0">
                Search
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-start cursor-pointer"
            onClick={onGroupContainerClick3}
          >
            <img
              className="w-[40.4px] h-[40.4px] relative shrink-0"
              alt=""
              src={iconsBig5}
            />
            <div className="flex flex-row items-start justify-start py-0 px-0.5 mt-[-1.4px]">
              <div className="relative tracking-[0.03em] inline-block min-w-[36.8px] shrink-0">
                Library
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-start cursor-pointer"
            onClick={onGroupContainerClick4}
          >
            <img
              className="w-[40.4px] h-[40.4px] relative shrink-0"
              alt=""
              src={iconsBig6}
            />
            <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-2.5 mt-[-1.4px]">
              <div className="relative tracking-[0.03em] inline-block min-w-[17px] shrink-0">
                Me
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent16;
