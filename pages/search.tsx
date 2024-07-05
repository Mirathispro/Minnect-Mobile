import type { NextPage } from "next";
import MobileMenu from "../components/mobile-menu";
import FrameComponent14 from "../components/frame-component14";
import MoodActivity from "../components/mood-activity";
import Entertainment from "../components/entertainment";
import Podcast from "../components/podcast";
import Audiobook from "../components/audiobook";

const Search: NextPage = () => {
  return (
    <div className="w-full h-[844px] relative bg-bg-primary overflow-y-auto flex flex-col items-end justify-start pt-[21px] px-[7px] pb-0 box-border gap-[22px] leading-[normal] tracking-[normal] text-left text-lg text-fg-primary font-small">
      <div className="absolute !m-[0] bottom-[148.8px] left-[15px] tracking-[0.03em] font-medium inline-block min-w-[59.3px]">
        Genres
      </div>
      <div className="w-[363px] flex flex-row items-start justify-end py-0 px-[11px] box-border max-w-full text-center text-mid text-fg-secondary">
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
      <MobileMenu
        iconsBig="/icons-big15.svg"
        iconsBig1="/icons-big1.svg"
        iconsBig2="/icons-big24.svg"
        iconsBig3="/icons-big3.svg"
        propFlex="unset"
        propPosition="absolute"
        propWidth="100%"
        propMargin="0 !important"
        propRight="0px"
        propBottom="0px"
        propLeft="0px"
      />
      <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[317.3px] pr-0 pl-px box-border gap-[44.8px] shrink-0 max-w-full text-sm text-gray-700">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[14px] shrink-0">
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[199px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[14.5px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[22.1px]">
                    <div className="self-stretch rounded-3xs bg-gray-500 overflow-hidden flex flex-row items-start justify-between py-0 px-2 shrink-0 gap-[20px]">
                      <div className="w-[179px] flex flex-col items-start justify-start pt-[8.2px] px-0 pb-0 box-border">
                        <div className="self-stretch relative tracking-[0.03em] font-medium">
                          What do you want to play?
                        </div>
                      </div>
                      <img
                        className="h-[35.4px] w-[35.4px] relative"
                        alt=""
                        src="/icons-big7.svg"
                      />
                    </div>
                    <b className="w-[210px] h-[27px] relative text-xl tracking-[0.03em] inline-block text-fg-primary shrink-0">
                      Browse all
                    </b>
                  </div>
                  <div className="w-[210px] relative text-lg tracking-[0.03em] font-medium text-fg-primary inline-block">
                    Discover
                  </div>
                </div>
              </div>
              <img
                className="h-[40.4px] w-[40.4px] relative"
                alt=""
                src="/icons-big25.svg"
              />
            </div>
            <div className="self-stretch h-[437.2px] overflow-x-auto shrink-0 flex flex-row flex-wrap items-start justify-between relative text-xl text-white font-satoshi">
              <div className="w-[170px] !m-[0] absolute top-[0px] left-[0px] rounded-3xs bg-darkslateblue-100 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-5 px-5 pb-[26px] box-border">
                <img
                  className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.4px] bottom-[-64.4px] rounded-8xs object-contain"
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className="h-[54px] relative tracking-[0.03em] font-black inline-block z-[1]">
                  <p className="m-0">Made For</p>
                  <p className="m-0">You</p>
                </div>
              </div>
              <div className="w-[170px] !m-[0] absolute top-[0px] left-[190px] rounded-3xs bg-chocolate overflow-hidden shrink-0 flex flex-row items-start justify-start pt-5 px-5 pb-[26px] box-border">
                <img
                  className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
                  alt=""
                  src="/image-13@2x.png"
                />
                <div className="h-[54px] relative tracking-[0.03em] font-black inline-block z-[1]">
                  <p className="m-0">New</p>
                  <p className="m-0">Releases</p>
                </div>
              </div>
              <div className="w-[170px] !m-[0] absolute top-[112.4px] left-[0px] rounded-3xs bg-darkslateblue-100 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-5 px-5 pb-[26px] box-border">
                <img
                  className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
                  alt=""
                  src="/image-13@2x.png"
                />
                <div className="h-[54px] relative tracking-[0.03em] font-black inline-block z-[1]">
                  <p className="m-0">Spotify</p>
                  <p className="m-0">Classics</p>
                </div>
              </div>
              <div className="h-[100px] w-[170px] !m-[0] absolute top-[112.4px] left-[190px] rounded-3xs bg-mediumpurple overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
                <img
                  className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
                  alt=""
                  src="/image-13@2x.png"
                />
                <div className="h-[27px] relative tracking-[0.03em] font-black inline-block min-w-[66.5px] z-[1]">
                  Charts
                </div>
              </div>
              <div className="h-[100px] w-[170px] !m-[0] absolute top-[224.8px] left-[0px] rounded-3xs bg-darkmagenta overflow-hidden shrink-0 flex flex-col items-start justify-start p-5 box-border">
                <img
                  className="w-[142.4px] h-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
                  alt=""
                  src="/image-13@2x.png"
                />
                <div className="relative tracking-[0.03em] font-black inline-block min-w-[88.6px] z-[1]">
                  Trending
                </div>
              </div>
              <div className="h-[100px] w-[170px] !m-[0] absolute top-[224.8px] left-[190px] rounded-3xs bg-mediumpurple overflow-hidden shrink-0 flex flex-col items-start justify-start p-5 box-border">
                <img
                  className="w-[142.4px] h-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
                  alt=""
                  src="/image-13@2x.png"
                />
                <div className="h-[27px] relative tracking-[0.03em] font-black inline-block min-w-[86.4px] z-[1]">
                  Discover
                </div>
              </div>
              <div className="w-[170px] !m-[0] absolute top-[337.2px] left-[0px] rounded-3xs bg-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-5 px-5 pb-[26px] box-border">
                <img
                  className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
                  alt=""
                  src="/image-13@2x.png"
                />
                <div className="h-[54px] relative tracking-[0.03em] leading-[23px] font-black inline-block min-h-[54px] z-[1]">
                  <p className="m-0">Spotify</p>
                  <p className="m-0">Singles</p>
                </div>
              </div>
              <div className="h-[100px] w-[170px] !m-[0] absolute top-[337.2px] left-[190px] rounded-3xs bg-chocolate overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
                <img
                  className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
                  alt=""
                  src="/image-13@2x.png"
                />
                <div className="h-[27px] relative tracking-[0.03em] font-black inline-block min-w-[84.9px] z-[1]">
                  Decades
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent14 />
      </div>
      <div className="w-40 h-[47px] relative overflow-hidden shrink-0 hidden z-[4]" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-2 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[23px] shrink-0 max-w-full">
          <div className="w-[210px] h-6 relative tracking-[0.03em] font-medium inline-block">{`Mood & Activity`}</div>
          <MoodActivity />
          <Entertainment />
          <Podcast />
          <Audiobook />
        </div>
      </div>
    </div>
  );
};

export default Search;
