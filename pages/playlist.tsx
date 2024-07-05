import type { NextPage } from "next";
import FrameComponent12 from "../components/frame-component12";
import MobileMenu from "../components/mobile-menu";
import PlaylistList from "../components/playlist-list";

const Playlist: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(59,_79,_182,_0.47),_rgba(6,_6,_6,_0.47)),_#111] overflow-y-auto flex flex-col items-start justify-start gap-[20px] leading-[normal] tracking-[normal] text-left text-xl text-fg-primary font-small">
      <FrameComponent12 />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-1 pr-5 pl-[21px]">
        <img
          className="h-[211px] w-[211px] relative rounded-3xs object-cover"
          alt=""
          src="/image-15@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[15px] box-border max-w-full">
        <b className="h-[27px] flex-1 relative tracking-[0.03em] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
          Daft Punk Mix
        </b>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[15px] text-sm text-fg-secondary">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <div className="relative tracking-[0.03em] font-medium inline-block min-w-[68px]">
            <span>{`By `}</span>
            <span className="text-fg-primary">Spotify</span>
          </div>
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="w-[3px] h-[3px] relative rounded-[50%] bg-fg-secondary" />
          </div>
          <div className="relative tracking-[0.03em] inline-block min-w-[61px]">
            50 songs
          </div>
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="w-[3px] h-[3px] relative rounded-[50%] bg-fg-secondary" />
          </div>
          <div className="relative tracking-[0.03em] inline-block min-w-[77px]">
            3 hr 30 min
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[15px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
          <div className="flex flex-row items-start justify-start gap-[14px]">
            <img
              className="h-10 w-10 relative min-h-[40px]"
              alt=""
              src="/pcplaylistdown.svg"
            />
            <img
              className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
              alt=""
              src="/icons-big10.svg"
            />
            <img
              className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
              alt=""
              src="/icons-big11.svg"
            />
            <img
              className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
              alt=""
              src="/icons-big12.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[14px]">
            <img
              className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
              alt=""
              src="/icons-big13.svg"
            />
            <img
              className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
              alt=""
              src="/icons-big14.svg"
            />
          </div>
        </div>
      </div>
      <MobileMenu
        iconsBig="/icons-big15.svg"
        iconsBig1="/icons-big1.svg"
        iconsBig2="/icons-big2.svg"
        iconsBig3="/icons-big16.svg"
        propFlex="unset"
        propPosition="absolute"
        propWidth="100%"
        propMargin="0 !important"
        propRight="0px"
        propBottom="0px"
        propLeft="0px"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-2 box-border max-w-full">
        <PlaylistList />
      </div>
    </div>
  );
};

export default Playlist;
