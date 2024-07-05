import type { NextPage } from "next";
import ProfileImage from "../components/profile-image";
import FrameComponent17 from "../components/frame-component17";
import Plan from "../components/plan";
import MobileNavigation from "../components/mobile-navigation";
import FrameComponent16 from "../components/frame-component16";

const Profile: NextPage = () => {
  return (
    <div className="w-full relative bg-bg-primary overflow-y-auto flex flex-col items-end justify-start gap-[15.4px] leading-[normal] tracking-[normal] text-center text-mid text-fg-secondary font-small">
      <div className="self-stretch bg-bg-primary overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[21px] pb-3 pr-[18px] pl-[31px] gap-[20px]">
        <div className="w-[53px] flex flex-row items-start justify-start gap-[4px]">
          <div className="flex-1 flex flex-row items-start justify-start z-[1]">
            <div className="flex-1 relative tracking-[-0.5px] leading-[14px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              9:41
            </div>
          </div>
          <img
            className="h-3.5 w-3.5 relative min-h-[14px] z-[1]"
            alt=""
            src="/location.svg"
          />
        </div>
        <div className="h-[47px] w-40 relative overflow-hidden shrink-0 hidden" />
        <div className="flex flex-row items-start justify-start gap-[8px] text-2xs text-gray-200">
          <div className="h-3.5 w-11 relative">
            <img
              className="absolute top-[0px] left-[0px] w-[18px] h-3.5 z-[1]"
              alt=""
              src="/network.svg"
            />
            <img
              className="absolute top-[0px] left-[26px] w-[18px] h-3.5 z-[1]"
              alt=""
              src="/data.svg"
            />
          </div>
          <div className="h-3.5 w-[27px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full mix-blend-normal z-[1]"
              alt=""
              src="/signal-bars.svg"
            />
            <div className="absolute top-[0px] left-[0px] bg-fg-secondary flex flex-row items-start justify-end py-0 pr-0 pl-1.5 z-[2]">
              <img
                className="h-3.5 w-[18px] relative hidden min-h-[14px]"
                alt=""
                src="/vector.svg"
              />
              <b className="w-3.5 relative tracking-[-0.5px] leading-[14px] inline-block min-w-[14px] z-[3]">
                78
              </b>
            </div>
          </div>
        </div>
      </div>
      <ProfileImage />
      <FrameComponent17 />
      <Plan />
      <MobileNavigation />
      <FrameComponent16
        iconsBig5="/icons-big3.svg"
        iconsBig6="/icons-big74.svg"
      />
    </div>
  );
};

export default Profile;
