import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent16 from "../components/frame-component16";

const LibraryList: NextPage = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/library");
  }, [router]);

  return (
    <div className="w-full relative bg-bg-primary overflow-y-auto flex flex-col items-end justify-start gap-[33.9px] leading-[normal] tracking-[normal] text-center text-mid text-fg-secondary font-small">
      <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-[15px] box-border gap-[16.6px] max-w-full">
        <div className="self-stretch flex flex-row items-end justify-start py-0 pr-0 pl-4 box-border gap-[1026px] max-w-full">
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
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[9px] pl-0 box-border max-w-full text-left text-sm text-gray-700">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-px box-border gap-[10.6px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.6px]">
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
                  <img
                    className="h-[40.4px] w-[40.4px] relative"
                    alt=""
                    src="/icons-big41.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-px box-border max-w-full text-base text-fg-secondary">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[133.1px] box-border gap-[20px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-xl text-fg-primary">
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
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-[112%] shrink-0 text-sm text-fg-primary">
                        <div className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0">
                          <div className="absolute top-[-1.7px] left-[-1.8px] w-full h-full">
                            <div className="absolute top-[0px] left-[0px] bg-darkslategray-300 w-full h-full" />
                            <img
                              className="absolute top-[calc(50%_-_11.5px)] left-[calc(50%_-_13.5px)] w-[27px] h-[23.1px]"
                              alt=""
                              src="/vector-9.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative object-contain min-h-[40px]"
                            alt=""
                            src="/icons-big44.svg"
                          />
                          <img
                            className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                            alt=""
                            src="/icons-big45.svg"
                          />
                          <div className="h-[22px] relative tracking-[0.03em] inline-block">
                            Liked songs
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-[112%] shrink-0 text-sm text-fg-primary">
                        <div className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0">
                          <div className="absolute top-[-1.7px] left-[-1.8px] w-full h-full">
                            <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-full h-full" />
                            <img
                              className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_9px)] w-[17.6px] h-[25.8px]"
                              alt=""
                              src="/vector-311.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative object-contain min-h-[40px]"
                            alt=""
                            src="/icons-big44.svg"
                          />
                          <img
                            className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                            alt=""
                            src="/icons-big45.svg"
                          />
                          <div className="h-[22px] relative tracking-[0.03em] inline-block">
                            Chill Stuff
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-[112%] shrink-0 text-sm text-fg-primary">
                        <div className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0">
                          <div className="absolute top-[-1.7px] left-[-1.8px] w-full h-full">
                            <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-full h-full" />
                            <img
                              className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_9px)] w-[17.6px] h-[25.8px]"
                              alt=""
                              src="/vector-311.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative object-contain min-h-[40px]"
                            alt=""
                            src="/icons-big44.svg"
                          />
                          <img
                            className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                            alt=""
                            src="/icons-big45.svg"
                          />
                          <div className="h-[22px] relative tracking-[0.03em] inline-block">
                            Rock n Roll
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-[112%] shrink-0 text-sm text-fg-primary">
                        <div className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0">
                          <div className="absolute top-[-1.7px] left-[-1.8px] w-full h-full">
                            <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-full h-full" />
                            <img
                              className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_9px)] w-[17.6px] h-[25.8px]"
                              alt=""
                              src="/vector-311.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative object-contain min-h-[40px]"
                            alt=""
                            src="/icons-big44.svg"
                          />
                          <img
                            className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                            alt=""
                            src="/icons-big45.svg"
                          />
                          <div className="h-[22px] relative tracking-[0.03em] inline-block">
                            Vibe
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-[112%] shrink-0 text-sm text-fg-primary">
                        <div className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0">
                          <div className="absolute top-[-1.7px] left-[-1.8px] w-full h-full">
                            <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-full h-full" />
                            <img
                              className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_9px)] w-[17.6px] h-[25.8px]"
                              alt=""
                              src="/vector-311.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative object-contain min-h-[40px]"
                            alt=""
                            src="/icons-big44.svg"
                          />
                          <img
                            className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                            alt=""
                            src="/icons-big45.svg"
                          />
                          <div className="h-[22px] relative tracking-[0.03em] inline-block">
                            Selected Linkin Park
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
                  alt=""
                  src="/vector-474.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-xl text-fg-primary">
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
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-[112%] shrink-0 text-fg-primary">
                        <img
                          className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-145@2x.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[7px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative"
                            alt=""
                            src="/icons-big48.svg"
                          />
                          <div className="h-[22px] relative tracking-[0.03em] font-medium inline-block">
                            Daily Mix 1
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-[112%] shrink-0 text-fg-primary">
                        <img
                          className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-145@2x.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative"
                            alt=""
                            src="/icons-big48.svg"
                          />
                          <div className="relative tracking-[0.03em] font-medium">
                            Daily Mix 2
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-[112%] shrink-0 text-fg-primary">
                        <img
                          className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-145@2x.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative"
                            alt=""
                            src="/icons-big48.svg"
                          />
                          <div className="relative tracking-[0.03em] font-medium">
                            Daily Mix 3
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-[112%] shrink-0 text-fg-primary">
                        <img
                          className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-145@2x.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative"
                            alt=""
                            src="/icons-big48.svg"
                          />
                          <div className="relative tracking-[0.03em] font-medium">
                            Rock Mix
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-[112%] shrink-0 text-fg-primary">
                        <div className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0">
                          <img
                            className="absolute top-[calc(50%_-_29.8px)] left-[calc(50%_-_29.6px)] rounded-8xs w-full h-full object-cover"
                            alt=""
                            src="/image-3@2x.png"
                          />
                          <img
                            className="absolute top-[calc(50%_-_29.8px)] left-[calc(50%_-_29.6px)] rounded-8xs w-full h-full object-cover"
                            alt=""
                            src="/image-4@2x.png"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[9px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative"
                            alt=""
                            src="/icons-big48.svg"
                          />
                          <div className="h-[22px] relative tracking-[0.03em] font-medium inline-block">
                            Chill Mix
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[20px] max-w-[112%] shrink-0 text-fg-primary">
                        <div className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0">
                          <img
                            className="absolute top-[calc(50%_-_29.8px)] left-[calc(50%_-_29.6px)] rounded-8xs w-full h-full object-cover"
                            alt=""
                            src="/image-3@2x.png"
                          />
                          <img
                            className="absolute top-[calc(50%_-_29.8px)] left-[calc(50%_-_29.6px)] rounded-8xs w-full h-full object-cover"
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <img
                            className="absolute top-[calc(50%_-_29.8px)] left-[calc(50%_-_29.6px)] rounded-8xs w-full h-full object-cover"
                            alt=""
                            src="/image-5@2x.png"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative"
                            alt=""
                            src="/icons-big48.svg"
                          />
                          <div className="relative tracking-[0.03em] font-medium">
                            Pop Mix
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
                  alt=""
                  src="/vector-475.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full shrink-0">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-xl text-fg-primary">
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
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-[112%] shrink-0 text-fg-primary">
                        <img
                          className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-145@2x.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative object-contain min-h-[40px]"
                            alt=""
                            src="/icons-big44.svg"
                          />
                          <img
                            className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                            alt=""
                            src="/icons-big51.svg"
                          />
                          <div className="relative tracking-[0.03em] font-medium">
                            Meteora
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[403%] shrink-0 text-fg-primary">
                        <img
                          className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-145@2x.png"
                        />
                        <div className="flex-1 flex flex-row items-center justify-start gap-[10px] min-w-[270px] max-w-full">
                          <img
                            className="h-[40.4px] w-[40.4px] relative object-contain min-h-[40px]"
                            alt=""
                            src="/icons-big44.svg"
                          />
                          <img
                            className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                            alt=""
                            src="/icons-big51.svg"
                          />
                          <div className="relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                            Random Access Memory
                          </div>
                        </div>
                      </div>
                      <div className="w-[63px] relative tracking-[0.03em] font-medium hidden shrink-0">
                        50
                      </div>
                      <div className="w-[136px] relative tracking-[0.03em] font-medium hidden shrink-0">
                        2 weeks ago
                      </div>
                      <div className="w-[136px] relative tracking-[0.03em] font-medium hidden shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="flex-1 flex flex-row items-center justify-start gap-[10px] max-w-[403%] shrink-0 text-fg-primary">
                        <div className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0">
                          <img
                            className="absolute top-[calc(50%_-_30.1px)] left-[calc(50%_-_30.5px)] rounded-8xs w-full h-full object-cover"
                            alt=""
                            src="/image-3@2x.png"
                          />
                          <img
                            className="absolute top-[calc(50%_-_30.1px)] left-[calc(50%_-_30.5px)] rounded-8xs w-full h-full object-cover"
                            alt=""
                            src="/image-4@2x.png"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative"
                            alt=""
                            src="/icons-big52.svg"
                          />
                          <div className="relative tracking-[0.03em] font-medium">
                            Abbey Road
                          </div>
                        </div>
                      </div>
                      <div className="w-[63px] relative tracking-[0.03em] font-medium hidden shrink-0">
                        50
                      </div>
                      <div className="w-[136px] relative tracking-[0.03em] font-medium hidden shrink-0">
                        2 weeks ago
                      </div>
                      <div className="w-[136px] relative tracking-[0.03em] font-medium hidden shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="flex-1 flex flex-row items-center justify-start gap-[10px] max-w-[403%] shrink-0 text-fg-primary">
                        <img
                          className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-145@2x.png"
                        />
                        <div className="flex-1 flex flex-row items-center justify-start gap-[10px] min-w-[890px] max-w-full mq962:min-w-full">
                          <img
                            className="h-[40.4px] w-[40.4px] relative"
                            alt=""
                            src="/icons-big52.svg"
                          />
                          <div className="h-[22px] flex-1 relative tracking-[0.03em] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[857px] mq929:min-w-full">
                            Black Holes and Revelations
                          </div>
                        </div>
                      </div>
                      <div className="w-[63px] relative tracking-[0.03em] font-medium hidden shrink-0">
                        50
                      </div>
                      <div className="w-[136px] relative tracking-[0.03em] font-medium hidden shrink-0">
                        2 weeks ago
                      </div>
                      <div className="w-[136px] relative tracking-[0.03em] font-medium hidden shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-476.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-xl text-fg-primary">
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
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full text-base text-fg-secondary">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[20px] max-w-[112%] shrink-0 text-fg-primary">
                        <div className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0">
                          <div className="absolute top-[-1.7px] left-[-1.8px] w-full h-full">
                            <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-full h-full" />
                            <img
                              className="absolute w-[calc(100%_-_9.2px)] top-[calc(50%_-_27.6px)] right-[4.9px] left-[4.3px] max-w-full overflow-hidden h-[55.4px]"
                              alt=""
                              src="/icons-big55.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative object-contain min-h-[40px]"
                            alt=""
                            src="/icons-big44.svg"
                          />
                          <img
                            className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                            alt=""
                            src="/icons-big56.svg"
                          />
                          <div className="relative tracking-[0.03em] font-medium">
                            Fav bands
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <img
                        className="h-[40.4px] w-[40.4px] relative shrink-0"
                        alt=""
                        src="/icons-big57.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-477.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-xl text-fg-primary">
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
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[20px] max-w-[112%] shrink-0 text-fg-primary">
                        <img
                          className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-145@2x.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative object-contain min-h-[40px]"
                            alt=""
                            src="/icons-big44.svg"
                          />
                          <img
                            className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                            alt=""
                            src="/icons-big60.svg"
                          />
                          <div className="relative tracking-[0.03em] font-medium">
                            Daft Punk
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[20px] max-w-[112%] shrink-0 text-fg-primary">
                        <img
                          className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-145@2x.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative object-contain min-h-[40px]"
                            alt=""
                            src="/icons-big44.svg"
                          />
                          <img
                            className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                            alt=""
                            src="/icons-big60.svg"
                          />
                          <div className="relative tracking-[0.03em] font-medium">
                            David Bowie
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[90px] max-w-full">
                      <div className="w-[400px] flex flex-row items-center justify-start gap-[20px] max-w-[112%] shrink-0 text-fg-primary">
                        <img
                          className="h-[61px] w-[61px] relative rounded-8xs overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-145@2x.png"
                        />
                        <div className="flex flex-row items-center justify-start gap-[10px]">
                          <img
                            className="h-[40.4px] w-[40.4px] relative"
                            alt=""
                            src="/icons-big61.svg"
                          />
                          <div className="relative tracking-[0.03em] font-medium">
                            Guns N’ Roses
                          </div>
                        </div>
                      </div>
                      <div className="h-[22px] w-[63px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        50
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                      <div className="h-[22px] w-[136px] relative tracking-[0.03em] font-medium inline-block shrink-0">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-40 h-[47px] relative overflow-hidden shrink-0 hidden" />
      <FrameComponent16
        iconsBig5="/icons-big16.svg"
        iconsBig6="/icons-big4.svg"
      />
    </div>
  );
};

export default LibraryList;
