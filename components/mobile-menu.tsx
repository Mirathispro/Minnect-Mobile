import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";

export type MobileMenuType = {
  className?: string;
  iconsBig?: string;
  iconsBig1?: string;
  iconsBig2?: string;
  iconsBig3?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPosition?: CSSProperties["position"];
  propWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
};

const MobileMenu: NextPage<MobileMenuType> = ({
  className = "",
  iconsBig,
  iconsBig1,
  iconsBig2,
  iconsBig3,
  propFlex,
  propPosition,
  propWidth,
  propMargin,
  propRight,
  propBottom,
  propLeft,
}) => {
  const mobileMenuStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      position: propPosition,
      width: propWidth,
      margin: propMargin,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [
    propFlex,
    propPosition,
    propWidth,
    propMargin,
    propRight,
    propBottom,
    propLeft,
  ]);

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
      className={`flex-1 overflow-hidden flex flex-row items-start justify-start pt-4 px-[27px] pb-6 box-border relative max-w-full z-[1] text-left text-xs text-fg-secondary font-small ${className}`}
      style={mobileMenuStyle}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(17,_17,_17,_0.85),_#111_42.62%)]" />
      <div className="flex-1 flex flex-row flex-wrap items-start justify-between max-w-full gap-[20px] z-[1]">
        <div
          className="flex flex-col items-start justify-start cursor-pointer"
          onClick={onGroupContainerClick}
        >
          <img
            className="w-[40.4px] h-[40.4px] relative shrink-0"
            alt=""
            src={iconsBig}
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
              src={iconsBig1}
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
            src={iconsBig2}
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
            src={iconsBig3}
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
            src="/icons-big4.svg"
          />
          <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-2.5 mt-[-1.4px]">
            <div className="relative tracking-[0.03em] inline-block min-w-[17px] shrink-0">
              Me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
