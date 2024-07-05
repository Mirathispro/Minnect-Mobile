import type { NextPage } from "next";
import RightSidebar from "../components/right-sidebar";
import FirstContentRow from "../components/first-content-row";
import FrameComponent13 from "../components/frame-component13";
import Footer from "../components/footer";
import MobileMenu from "../components/mobile-menu";

const Discover: NextPage = () => {
  return (
    <div className="w-full h-[844px] relative bg-bg-primary overflow-hidden flex flex-col items-start justify-start gap-[513px] leading-[normal] tracking-[normal]">
      <div className="self-stretch h-[844px] flex flex-col items-start justify-start pt-0 px-0 pb-[127px] box-border relative gap-[14px] shrink-0 max-w-full">
        <RightSidebar />
        <div className="self-stretch rounded-3xs bg-bg-secondary overflow-hidden flex flex-col items-start justify-end pt-[263px] px-3.5 pb-3.5 box-border gap-[11.4px] shrink-0 max-w-full">
          <FirstContentRow />
          <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
            <img
              className="flex-1 relative max-w-full overflow-clip max-h-[unset]"
              alt=""
              src="/lp.svg"
            />
          </div>
        </div>
        <img
          className="w-[57px] h-0.5 absolute !m-[0] top-[99px] right-[166px] z-[2]"
          alt=""
          src="/vector-44.svg"
        />
        <div className="self-stretch rounded-3xs bg-bg-secondary overflow-hidden flex flex-col items-start justify-end pt-[263px] px-3.5 pb-3.5 box-border gap-[11.4px] shrink-0 max-w-full">
          <FrameComponent13
            iconsBig="/icons-big21.svg"
            iconsBig1="/icons-big22.svg"
          />
          <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 pr-0.5 pl-[3px] box-border max-w-full">
            <img
              className="flex-1 relative max-w-full overflow-clip max-h-[unset]"
              alt=""
              src="/group-51.svg"
            />
          </div>
        </div>
      </div>
      <Footer />
      <img
        className="w-full h-32 absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[2]"
        alt=""
        src="/group-79@2x.png"
      />
      <MobileMenu
        iconsBig="/icons-big15.svg"
        iconsBig1="/icons-big23.svg"
        iconsBig2="/icons-big2.svg"
        iconsBig3="/icons-big3.svg"
        propFlex="unset"
        propPosition="absolute"
        propWidth="100%"
        propMargin="0 !important"
        propRight="0px"
        propBottom="0px"
        propLeft="0px"
      />
      <div className="w-40 h-[47px] relative overflow-hidden shrink-0 hidden z-[4]" />
      <div className="self-stretch rounded-3xs bg-bg-secondary overflow-hidden flex flex-col items-start justify-end pt-[263px] px-3.5 pb-3.5 box-border gap-[11.4px] shrink-0 max-w-full">
        <FrameComponent13
          iconsBig="/icons-big17.svg"
          iconsBig1="/icons-big18.svg"
        />
        <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 pr-0.5 pl-[3px] box-border max-w-full">
          <img
            className="flex-1 relative max-w-full overflow-clip max-h-[unset]"
            alt=""
            src="/group-51.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
