import type { NextPage } from "next";
import MobileMenu from "../components/mobile-menu";
import FrameComponent15 from "../components/frame-component15";
import NowPlaying from "../components/now-playing";

const Library: NextPage = () => {
  return (
    <div className="w-full relative bg-bg-primary overflow-y-auto flex flex-col items-end justify-start gap-[10.6px] leading-[normal] tracking-[normal] text-center text-mid text-fg-secondary font-small">
      <div className="w-[379px] flex flex-row items-end justify-start pt-0 pb-1.5 pr-0 pl-5 box-border gap-[1026px] max-w-full">
        <div className="w-[341px] flex flex-col items-start justify-end pt-0 px-0 pb-[5.4px] box-border max-w-full shrink-0">
          <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[20px]">
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
        <img
          className="h-[40.4px] w-[40.4px] relative shrink-0"
          alt=""
          src="/icons-big9.svg"
        />
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
      <FrameComponent15 />
      <div className="w-40 h-[47px] relative overflow-hidden shrink-0 hidden z-[3]" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-2 box-border max-w-full text-left text-xl text-fg-primary">
        <div className="h-[685px] flex-1 relative max-w-full">
          <div className="absolute top-[0px] left-[8px] w-[359px] flex flex-col items-start justify-start pt-0 px-0 pb-[1341px] box-border gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <b className="w-[158.8px] relative tracking-[0.03em] inline-block shrink-0">
                  Playlists
                </b>
                <div className="flex flex-row items-center justify-end gap-[5px]">
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                  />
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                  />
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                    src="/icons-big29.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[210px] relative overflow-x-auto shrink-0 hidden text-xs">
                <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-center justify-start gap-[11px]">
                  <div className="h-[210px] flex-1 relative">
                    <div className="absolute top-[122px] left-[calc(50%_-_70px)] w-full h-[88.2px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_70px)] rounded-t-[7.94px] rounded-b-none bg-limegreen-100 w-full h-full" />
                      <div className="absolute top-[30.5px] left-[calc(50%_-_62px)] w-[124.4px] h-[46.9px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-between gap-[12.38px]">
                          <div className="h-4 w-[100px] relative tracking-[0.03em] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                            Liked songs
                          </div>
                          <div className="h-4 relative tracking-[0.03em] text-primary inline-block">
                            12
                          </div>
                        </div>
                        <div className="self-stretch h-7 relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
                          Get Lucky, Instant Crush, and more
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[39.7px] right-[-0.4px] rounded-81xl w-[40.4px] h-[40.4px] object-contain"
                      alt=""
                      src="/icons-big30.svg"
                    />
                    <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start gap-[1px]">
                      <div className="self-stretch h-1.5 relative rounded-t-[7.25px] rounded-b-none bg-limegreen-200" />
                      <div className="self-stretch h-[140px] relative rounded-[7.25px] overflow-hidden shrink-0">
                        <div className="absolute top-[-4.6px] left-[-5px] w-[180px] h-[180px]">
                          <div className="absolute top-[0px] left-[0px] bg-darkslategray-300 w-full h-full" />
                        </div>
                        <img
                          className="absolute top-[calc(50%_-_53.1px)] left-[calc(50%_-_53px)] w-[105.5px] h-[105.5px]"
                          alt=""
                          src="/icons-big31.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="absolute top-[32.2px] right-[-0.4px] rounded-61xl-2 w-[32.4px] h-[32.4px] object-contain"
                      alt=""
                      src="/icons-big32.svg"
                    />
                  </div>
                  <div className="h-[210px] flex-1 relative">
                    <div className="absolute top-[122px] left-[calc(50%_-_70px)] w-full h-[88.2px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_70px)] rounded-t-[7.94px] rounded-b-none bg-gray-400 w-full h-full" />
                      <div className="absolute top-[30.5px] left-[calc(50%_-_62px)] w-[124.4px] h-[46.9px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-between gap-[5.38px]">
                          <div className="h-4 w-[100px] relative tracking-[0.03em] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                            Chill stuff
                          </div>
                          <div className="h-4 relative tracking-[0.03em] text-fg-secondary inline-block">
                            152
                          </div>
                        </div>
                        <div className="self-stretch h-7 relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
                          Get Lucky, Instant Crush, and more
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[39.7px] right-[-0.4px] rounded-81xl w-[40.4px] h-[40.4px] object-contain"
                      alt=""
                      src="/icons-big30.svg"
                    />
                    <div className="absolute top-[0.4px] left-[0px] flex flex-col items-center justify-start gap-[0.8px]">
                      <div className="self-stretch h-1.5 relative rounded-t-[5.97px] rounded-b-none bg-dimgray-200" />
                      <div className="self-stretch h-[140px] relative rounded-[5.97px] overflow-hidden shrink-0">
                        <div className="absolute top-[-3.9px] left-[-8px] w-full h-full">
                          <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-full h-full" />
                          <img
                            className="absolute top-[calc(50%_-_30.15px)] left-[calc(50%_-_20.15px)] w-[40.5px] h-[59.3px]"
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[32.2px] right-[-0.4px] rounded-61xl-2 w-[32.4px] h-[32.4px] object-contain"
                      alt=""
                      src="/icons-big32.svg"
                    />
                  </div>
                  <div className="h-[210px] flex-1 relative">
                    <div className="absolute top-[122px] left-[calc(50%_-_70px)] w-full h-[88.2px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_70px)] rounded-t-[7.94px] rounded-b-none bg-gray-400 w-full h-full" />
                      <div className="absolute top-[30.5px] left-[calc(50%_-_62px)] w-[124.4px] h-[46.9px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-between gap-[5.38px]">
                          <div className="h-4 w-[100px] relative tracking-[0.03em] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                            Rock n Roll
                          </div>
                          <div className="h-4 relative tracking-[0.03em] text-fg-secondary inline-block">
                            152
                          </div>
                        </div>
                        <div className="self-stretch h-7 relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
                          Metallica, Guns N’ Roses, and more
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[39.7px] right-[-0.4px] rounded-81xl w-[40.4px] h-[40.4px] object-contain"
                      alt=""
                      src="/icons-big30.svg"
                    />
                    <div className="absolute top-[0.4px] left-[0px] flex flex-col items-center justify-start gap-[0.8px]">
                      <div className="self-stretch h-1.5 relative rounded-t-[5.97px] rounded-b-none bg-dimgray-200" />
                      <div className="self-stretch h-[140px] relative rounded-[5.97px] overflow-hidden shrink-0">
                        <div className="absolute top-[-3.9px] left-[-8px] w-full h-full">
                          <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-full h-full" />
                          <img
                            className="absolute top-[calc(50%_-_30.15px)] left-[calc(50%_-_20.15px)] w-[40.5px] h-[59.3px]"
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[32.2px] right-[-0.4px] rounded-61xl-2 w-[32.4px] h-[32.4px] object-contain"
                      alt=""
                      src="/icons-big32.svg"
                    />
                  </div>
                  <div className="h-[210px] flex-1 relative">
                    <div className="absolute top-[122px] left-[calc(50%_-_70px)] w-full h-[88.2px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_70px)] rounded-t-[7.94px] rounded-b-none bg-gray-400 w-full h-full" />
                      <div className="absolute top-[30.5px] left-[calc(50%_-_62px)] w-[124.4px] h-[46.9px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-between gap-[17.38px]">
                          <div className="h-4 w-[100px] relative tracking-[0.03em] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                            Vibe
                          </div>
                          <div className="relative tracking-[0.03em] text-fg-secondary">
                            2
                          </div>
                        </div>
                        <div className="self-stretch h-3.5 relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
                          Blue Skies, No Heaven
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[39.7px] right-[-0.4px] rounded-81xl w-[40.4px] h-[40.4px] object-contain"
                      alt=""
                      src="/icons-big30.svg"
                    />
                    <div className="absolute top-[0.4px] left-[0px] flex flex-col items-center justify-start gap-[0.8px]">
                      <div className="self-stretch h-1.5 relative rounded-t-[5.97px] rounded-b-none bg-dimgray-200" />
                      <div className="self-stretch h-[140px] relative rounded-[5.97px] overflow-hidden shrink-0">
                        <div className="absolute top-[-3.9px] left-[-8px] w-full h-full">
                          <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-full h-full" />
                          <img
                            className="absolute top-[calc(50%_-_30.15px)] left-[calc(50%_-_20.15px)] w-[40.5px] h-[59.3px]"
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[32.2px] right-[-0.4px] rounded-61xl-2 w-[32.4px] h-[32.4px] object-contain"
                      alt=""
                      src="/icons-big32.svg"
                    />
                  </div>
                  <div className="h-[210px] flex-1 relative">
                    <div className="absolute top-[122px] left-[calc(50%_-_70px)] w-full h-[88.2px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_70px)] rounded-t-[7.94px] rounded-b-none bg-gray-400 w-full h-full" />
                      <div className="absolute top-[30.5px] left-[calc(50%_-_62px)] w-[124.4px] h-[46.9px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-between gap-[17.38px]">
                          <div className="h-4 w-[100px] relative tracking-[0.03em] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                            Selected Linkin Park
                          </div>
                          <div className="relative tracking-[0.03em] text-fg-secondary">
                            2
                          </div>
                        </div>
                        <div className="self-stretch h-7 relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
                          Numb, Crawling, In the End, and more
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[39.7px] right-[-0.4px] rounded-81xl w-[40.4px] h-[40.4px] object-contain"
                      alt=""
                      src="/icons-big30.svg"
                    />
                    <div className="absolute top-[0.4px] left-[0px] flex flex-col items-center justify-start gap-[0.8px]">
                      <div className="self-stretch h-1.5 relative rounded-t-[5.97px] rounded-b-none bg-dimgray-200" />
                      <div className="self-stretch h-[140px] relative rounded-[5.97px] overflow-hidden shrink-0">
                        <div className="absolute top-[-3.9px] left-[-8px] w-full h-full">
                          <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-full h-full" />
                          <img
                            className="absolute top-[calc(50%_-_30.15px)] left-[calc(50%_-_20.15px)] w-[40.5px] h-[59.3px]"
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[32.2px] right-[-0.4px] rounded-61xl-2 w-[32.4px] h-[32.4px] object-contain"
                      alt=""
                      src="/icons-big32.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-47.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <b className="relative tracking-[0.03em]">
                  Playlists by Spotify
                </b>
                <div className="flex flex-row items-center justify-end gap-[5px]">
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                  />
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                  />
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                    src="/icons-big29.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[210px] relative overflow-x-auto shrink-0 hidden text-xs text-fg-secondary">
                <div className="absolute top-[0px] left-[0px] overflow-x-auto flex flex-row items-center justify-start gap-[11px]">
                  <div className="h-[210px] w-[140px] relative shrink-0">
                    <div className="absolute top-[129px] left-[0px] rounded-t-[6.57px] rounded-b-none bg-paleturquoise-300 w-[140px] h-[81px]" />
                    <div className="absolute top-[0px] left-[calc(50%_-_64px)] rounded-t-7xs rounded-b-none bg-paleturquoise-600 w-[129px] h-1.5" />
                    <img
                      className="absolute top-[7px] left-[0px] rounded-7xs w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[174px] left-[9px] text-3xs tracking-[0.03em] inline-block w-[125px]">
                      Linkin Park, System Of A Down, Coal Chamber...
                    </div>
                    <div className="absolute top-[152px] left-[118px] tracking-[0.03em] text-paleturquoise-200">
                      50
                    </div>
                    <div className="absolute top-[152px] left-[9px] tracking-[0.03em] text-fg-primary">
                      Daily Mix 1
                    </div>
                  </div>
                  <div className="h-[210px] w-[140px] relative shrink-0">
                    <div className="absolute top-[129px] left-[0px] rounded-t-[6.57px] rounded-b-none bg-pink-300 w-[140px] h-[81px]" />
                    <div className="absolute top-[0px] left-[calc(50%_-_64px)] rounded-t-7xs rounded-b-none bg-pink-500 w-[129px] h-1.5" />
                    <img
                      className="absolute top-[7px] left-[0px] rounded-7xs w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[174px] left-[9px] text-3xs tracking-[0.03em] inline-block w-[125px]">
                      Avril Lavigne, Lorde, Charli XCX and more
                    </div>
                    <div className="absolute top-[152px] left-[118px] tracking-[0.03em] text-pink-200">
                      32
                    </div>
                    <div className="absolute top-[152px] left-[9px] tracking-[0.03em] text-fg-primary">
                      Daily Mix 2
                    </div>
                  </div>
                  <div className="h-[210px] w-[140px] relative shrink-0">
                    <div className="absolute top-[129px] left-[0px] rounded-t-[6.57px] rounded-b-none bg-darkseagreen-300 w-[140px] h-[81px]" />
                    <div className="absolute top-[0px] left-[calc(50%_-_64px)] rounded-t-7xs rounded-b-none bg-darkseagreen-500 w-[129px] h-1.5" />
                    <img
                      className="absolute top-[7px] left-[0px] rounded-7xs w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[174px] left-[9px] text-3xs tracking-[0.03em] inline-block w-[125px]">
                      The Strokes, Martin Garrix, MGMT and more
                    </div>
                    <div className="absolute top-[152px] left-[118px] tracking-[0.03em] text-darkseagreen-100">
                      50
                    </div>
                    <div className="absolute top-[152px] left-[9px] tracking-[0.03em] text-fg-primary">
                      Daily Mix 3
                    </div>
                  </div>
                  <div className="h-[210px] w-[140px] relative shrink-0">
                    <div className="absolute top-[129px] left-[0px] rounded-t-[6.57px] rounded-b-none bg-yellowgreen-200 w-[140px] h-[81px]" />
                    <div className="absolute top-[0px] left-[calc(50%_-_64px)] rounded-t-7xs rounded-b-none bg-yellowgreen-400 w-[129px] h-1.5" />
                    <img
                      className="absolute top-[7px] left-[0px] rounded-7xs w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[174px] left-[9px] text-3xs tracking-[0.03em] inline-block w-[125px]">
                      Red Hot Chili Peppers, R.E.M., Guns N’ Roses...
                    </div>
                    <div className="absolute top-[152px] left-[118px] tracking-[0.03em] text-yellowgreen-100">
                      50
                    </div>
                    <div className="absolute top-[152px] left-[9px] tracking-[0.03em] text-fg-primary">
                      Rock Mix
                    </div>
                  </div>
                  <div className="h-[210px] w-[140px] relative shrink-0">
                    <div className="absolute top-[129px] left-[0px] rounded-t-[6.57px] rounded-b-none bg-gold-200 w-[140px] h-[81px]" />
                    <div className="absolute top-[0px] left-[calc(50%_-_64px)] rounded-t-7xs rounded-b-none bg-gold-400 w-[129px] h-1.5" />
                    <img
                      className="absolute top-[7px] left-[0px] rounded-7xs w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[174px] left-[9px] text-3xs tracking-[0.03em] inline-block w-[125px]">
                      MF DOOM, Daft Punk, The Chainsmokers, and more
                    </div>
                    <div className="absolute top-[152px] left-[118px] tracking-[0.03em] text-gold-100">
                      32
                    </div>
                    <div className="absolute top-[152px] left-[9px] tracking-[0.03em] text-fg-primary">
                      Chill Mix
                    </div>
                  </div>
                  <div className="h-[210px] w-[140px] relative shrink-0">
                    <div className="absolute top-[129px] left-[0px] rounded-t-[6.57px] rounded-b-none bg-paleturquoise-400 w-[140px] h-[81px]" />
                    <div className="absolute top-[0px] left-[calc(50%_-_64px)] rounded-t-7xs rounded-b-none bg-paleturquoise-800 w-[129px] h-1.5" />
                    <img
                      className="absolute top-[7px] left-[0px] rounded-7xs w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[174px] left-[9px] text-3xs tracking-[0.03em] inline-block w-[125px]">
                      Red Hot Chili Peppers, R.E.M., Guns N’ Roses...
                    </div>
                    <div className="absolute top-[152px] left-[118px] tracking-[0.03em] text-paleturquoise-100">
                      50
                    </div>
                    <div className="absolute top-[152px] left-[9px] tracking-[0.03em] text-fg-primary">
                      Pop Mix
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-471.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <b className="h-[27px] w-[158.8px] relative tracking-[0.03em] inline-block shrink-0">
                  Albums
                </b>
                <div className="flex flex-row items-center justify-end gap-[5px]">
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                  />
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                  />
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                    src="/icons-big29.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[253.3px] relative overflow-x-auto shrink-0 hidden text-3xs text-fg-secondary">
                <div className="absolute top-[0px] left-[0px] h-[253.3px] overflow-x-auto flex flex-row items-center justify-start gap-[12.4px]">
                  <div className="h-[228px] w-[140px] relative shrink-0">
                    <div className="absolute top-[20px] left-[calc(50%_-_60px)] rounded-t-7xs rounded-b-none bg-thistle w-[120px] h-1.5" />
                    <img
                      className="absolute top-[27px] left-[0px] rounded-7xs w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[194px] left-[0px] tracking-[0.03em] inline-block w-[125px]">
                      Daft Punk
                    </div>
                    <div className="absolute top-[172.4px] left-[0px] w-[140px] flex flex-row items-center justify-between gap-[20px] text-xs text-fg-primary">
                      <div className="self-stretch w-[92px] relative tracking-[0.03em] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                        Random Access Memories
                      </div>
                      <div className="self-stretch relative tracking-[0.03em] text-fg-secondary overflow-hidden text-ellipsis whitespace-nowrap">
                        13
                      </div>
                    </div>
                  </div>
                  <div className="h-[228px] w-[140.4px] relative shrink-0">
                    <div className="absolute top-[20px] left-[calc(50%_-_59.8px)] rounded-t-7xs rounded-b-none bg-cadetblue w-[120px] h-[5.6px]" />
                    <img
                      className="absolute top-[27px] left-[0.4px] rounded-7xs w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[194px] left-[0.4px] tracking-[0.03em] inline-block w-[125px]">
                      The Beatles
                    </div>
                    <div className="absolute top-[172.4px] left-[0px] w-[140px] flex flex-row items-center justify-between gap-[20px] text-xs text-fg-primary">
                      <div className="self-stretch w-[92px] relative tracking-[0.03em] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                        The Beatles
                      </div>
                      <div className="self-stretch relative tracking-[0.03em] text-fg-secondary overflow-hidden text-ellipsis whitespace-nowrap">
                        13
                      </div>
                    </div>
                  </div>
                  <div className="h-[228px] w-[140.2px] relative shrink-0">
                    <div className="absolute top-[20px] left-[calc(50%_-_60px)] rounded-t-7xs rounded-b-none bg-steelblue-300 w-[120px] h-[5.6px]" />
                    <img
                      className="absolute top-[27px] left-[0.1px] rounded-7xs w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[194px] left-[0.1px] tracking-[0.03em] inline-block w-[125px]">
                      Muse
                    </div>
                    <div className="absolute top-[172.4px] left-[0px] w-[140px] flex flex-row items-center justify-between gap-[20px] text-xs text-fg-primary">
                      <div className="self-stretch w-[92px] relative tracking-[0.03em] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                        Black Holes and Revelations
                      </div>
                      <div className="self-stretch relative tracking-[0.03em] text-fg-secondary overflow-hidden text-ellipsis whitespace-nowrap">
                        13
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-472.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <b className="h-[27px] w-[158.8px] relative tracking-[0.03em] inline-block shrink-0">
                  Folders
                </b>
                <div className="flex flex-row items-center justify-end gap-[5px]">
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                  />
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                  />
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                    src="/icons-big29.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[210px] relative hidden text-xs">
                <div className="absolute top-[0px] left-[0px] overflow-x-auto flex flex-row items-center justify-start">
                  <div className="h-[210px] w-[140px] relative shrink-0">
                    <div className="absolute top-[122px] left-[calc(50%_-_70px)] w-full h-[88.2px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_70px)] rounded-t-[7.94px] rounded-b-none bg-gray-400 w-full h-full" />
                      <div className="absolute top-[30.5px] left-[calc(50%_-_62px)] w-[124.4px] h-[46.9px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch flex flex-row items-center justify-between gap-[5.38px]">
                          <div className="h-4 w-[100px] relative tracking-[0.03em] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                            Fav bands
                          </div>
                          <div className="h-4 relative tracking-[0.03em] text-fg-secondary inline-block">
                            152
                          </div>
                        </div>
                        <div className="self-stretch h-7 relative text-3xs tracking-[0.03em] text-fg-secondary inline-block">
                          Linkin Park, Muse, and more
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[39.7px] right-[-0.4px] rounded-81xl w-[40.4px] h-[40.4px] object-contain"
                      alt=""
                      src="/icons-big30.svg"
                    />
                    <div className="absolute top-[0.4px] left-[0px] w-[140px] h-[146.8px]">
                      <div className="absolute top-[0px] left-[6px] rounded-t-[5.97px] rounded-b-none bg-dimgray-200 w-16 h-1.5" />
                      <div className="absolute top-[6.8px] left-[0px] rounded-[5.97px] w-[140px] h-[140px] overflow-hidden">
                        <div className="absolute top-[-3.9px] left-[-8px] w-full h-full">
                          <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-full h-full" />
                          <img
                            className="absolute top-[calc(50%_-_25.45px)] left-[calc(50%_-_26.15px)] w-[60.3px] h-[50.7px]"
                            alt=""
                            src="/group-34.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[32.2px] right-[-0.4px] rounded-61xl-2 w-[32.4px] h-[32.4px] object-contain"
                      alt=""
                      src="/icons-big32.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-473.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <b className="h-[27px] w-[158.8px] relative tracking-[0.03em] inline-block shrink-0">
                  Artists
                </b>
                <div className="flex flex-row items-center justify-end gap-[5px]">
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                  />
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                  />
                  <img
                    className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                    alt=""
                    src="/icons-big29.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[168.3px] relative overflow-x-auto shrink-0 hidden text-xs">
                <div className="absolute top-[0px] left-[0px] overflow-x-auto flex flex-row items-center justify-start py-[1.1px] px-0 gap-[12.4px]">
                  <div className="h-[166px] w-[140px] relative shrink-0">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-81xl w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[150px] left-[calc(50%_-_40px)] tracking-[0.03em]">
                      Guns N’ Roses
                    </div>
                  </div>
                  <div className="h-[166px] w-[140px] relative shrink-0">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-81xl w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[150px] left-[calc(50%_-_27px)] tracking-[0.03em]">
                      Daft Punk
                    </div>
                  </div>
                  <div className="h-[166px] w-[140px] relative shrink-0">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-81xl w-[140px] h-[140px] overflow-hidden object-cover"
                      alt=""
                      src="/frame-8@2x.png"
                    />
                    <div className="absolute top-[150px] left-[calc(50%_-_34px)] tracking-[0.03em]">
                      David Bowie
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NowPlaying propTop="529px" />
        </div>
      </div>
    </div>
  );
};

export default Library;
