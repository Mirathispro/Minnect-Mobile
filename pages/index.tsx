import type { NextPage } from "next";
import FrameComponent11 from "../components/frame-component11";
import Playlist2 from "../components/playlist2";
import Playlist1 from "../components/playlist1";
import Playlist from "../components/playlist";
import FrameComponent10 from "../components/frame-component10";
import MixGrid from "../components/mix-grid";
import MixRow1 from "../components/mix-row1";
import MixRow from "../components/mix-row";
import PairContainer from "../components/pair-container";
import AdeleContainer from "../components/adele-container";
import DaftPunkContainer from "../components/daft-punk-container";
import FrameComponent9 from "../components/frame-component9";
import PlaylistCard from "../components/playlist-card";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import Menu1 from "../components/menu1";
import Menu from "../components/menu";
import FrameComponent from "../components/frame-component";

const Home: NextPage = () => {
  return (
    <div className="w-full h-[844px] relative bg-bg-primary overflow-y-auto flex flex-col items-end justify-start pt-[21px] px-0 pb-0 box-border gap-[15px] leading-[normal] tracking-[normal] text-left text-xl text-fg-primary font-small">
      <div className="w-[377px] flex flex-row items-start justify-end pt-0 px-[18px] pb-[7px] box-border max-w-full shrink-0 text-center text-mid text-fg-secondary">
        <div className="flex-1 flex flex-row items-start justify-between shrink-0 max-w-full gap-[20px]">
          <div className="w-[53px] flex flex-row items-start justify-start gap-[4px]">
            <div className="flex-1 flex flex-row items-start justify-start">
              <div className="flex-1 relative tracking-[-0.5px] leading-[14px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                9:41
              </div>
            </div>
            <img
              className="h-3.5 w-3.5 relative min-h-[14px]"
              alt=""
              src="/location.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-2xs text-gray-200">
            <div className="h-3.5 w-11 relative">
              <img
                className="absolute top-[0px] left-[0px] w-[18px] h-3.5"
                alt=""
                src="/network.svg"
              />
              <img
                className="absolute top-[0px] left-[26px] w-[18px] h-3.5"
                alt=""
                src="/data.svg"
              />
            </div>
            <div className="h-3.5 w-[27px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full mix-blend-normal"
                alt=""
                src="/signal-bars.svg"
              />
              <div className="absolute top-[0px] left-[0px] bg-fg-secondary flex flex-row items-start justify-end py-0 pr-0 pl-1.5 z-[1]">
                <img
                  className="h-3.5 w-[18px] relative hidden min-h-[14px]"
                  alt=""
                  src="/vector.svg"
                />
                <b className="w-3.5 relative tracking-[-0.5px] leading-[14px] inline-block min-w-[14px] z-[2]">
                  78
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[9px] pl-[15px] box-border max-w-full shrink-0 text-xs">
        <div className="flex-1 flex flex-row items-start justify-between py-0 pr-0 pl-px box-border shrink-0 max-w-full gap-[20px]">
          <div className="w-[259px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
              <div className="rounded-lg bg-bg-secondary flex flex-row items-start justify-start py-2 px-[15px]">
                <div className="relative tracking-[0.03em] inline-block min-w-[33px]">
                  Music
                </div>
              </div>
              <div className="rounded-lg bg-bg-secondary flex flex-row items-start justify-start py-2 px-[15px]">
                <div className="relative tracking-[0.03em] inline-block min-w-[50px]">
                  Podcasts
                </div>
              </div>
              <div className="rounded-lg bg-bg-secondary flex flex-row items-start justify-start py-2 px-[15px]">
                <div className="relative tracking-[0.03em] inline-block min-w-[66px]">
                  Audiobooks
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[40.4px] w-[40.4px] relative"
            alt=""
            src="/mobilehomeadd.svg"
          />
        </div>
      </div>
      <FrameComponent11 />
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[15px] box-border gap-[15px] shrink-0 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2.5 pl-4 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <b className="h-[27px] relative tracking-[0.03em] inline-block">
              Made For You
            </b>
            <img
              className="self-stretch w-10 relative max-h-full min-h-[27px]"
              alt=""
              src="/homemore.svg"
            />
          </div>
        </div>
        <div className="w-[390px] overflow-x-auto flex flex-row items-start justify-start py-0 px-4 box-border gap-[9px] max-w-full">
          <Playlist2 />
          <Playlist1 />
          <Playlist />
          <FrameComponent10 />
          <MixGrid />
          <MixRow1 />
          <MixRow />
          <PairContainer />
          <AdeleContainer />
          <DaftPunkContainer />
          <FrameComponent9 />
          <PlaylistCard />
        </div>
      </div>
      <div className="self-stretch h-[267px] shrink-0 flex flex-col items-end justify-start pt-0 px-0 pb-[197px] box-border gap-[15px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2.5 pl-4 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between shrink-0 max-w-full gap-[20px]">
            <b className="relative tracking-[0.03em]">Your top mixes</b>
            <img
              className="self-stretch w-10 relative max-h-full min-h-[27px]"
              alt=""
              src="/homemore.svg"
            />
          </div>
        </div>
        <div className="self-stretch overflow-x-auto flex flex-row items-start justify-start pt-[0.9px] px-0 pb-7 box-border relative gap-[9px] shrink-0 max-w-full text-3xs-9 text-fg-secondary">
          <img
            className="h-[140.3px] w-[140.3px] absolute !m-[0] top-[10px] right-[84.4px] rounded-[5.98px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-8@2x.png"
          />
          <div className="w-[140.3px] absolute !m-[0] right-[-64.9px] bottom-[6.1px] tracking-[0.03em] inline-block">
            Red Hot Chili Peppers, R.E.M., Guns N’ Roses...
          </div>
          <img
            className="h-[140.3px] w-[140.3px] absolute !m-[0] top-[10px] right-[-64.9px] rounded-[5.98px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-8@2x.png"
          />
          <FrameComponent8 />
          <FrameComponent7 />
          <FrameComponent6 />
          <FrameComponent5 />
          <FrameComponent4 />
          <FrameComponent3 />
        </div>
      </div>
      <FrameComponent2 />
      <FrameComponent1 />
      <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0 pl-4 shrink-0 gap-[20px]">
        <b className="h-[27px] w-[164px] relative tracking-[0.03em] inline-block">
          Podcasts for you
        </b>
        <img
          className="self-stretch w-10 relative max-h-full min-h-[27px]"
          alt=""
          src="/homemore.svg"
        />
      </div>
      <Menu1 />
      <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0 pl-4 shrink-0 gap-[20px]">
        <b className="h-[27px] w-[163px] relative tracking-[0.03em] inline-block">
          Episodes for you
        </b>
        <img
          className="self-stretch w-10 relative max-h-full min-h-[27px]"
          alt=""
          src="/homemore.svg"
        />
      </div>
      <Menu />
      <div className="w-40 h-[47px] relative overflow-hidden shrink-0 hidden" />
      <FrameComponent />
    </div>
  );
};

export default Home;
