import type { NextPage } from "next";

export type PodcastType = {
  className?: string;
};

const Podcast: NextPage<PodcastType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-[23px] text-left text-lg text-fg-primary font-small ${className}`}
    >
      <div className="w-[210px] h-6 relative tracking-[0.03em] font-medium inline-block">
        Podcasts
      </div>
      <div className="self-stretch h-[211px] overflow-x-auto shrink-0 flex flex-row flex-wrap items-center justify-start relative gap-[11px] text-xl text-white font-satoshi">
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[0px] left-[0px] rounded-3xs bg-teal overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[92px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Podcasts
          </div>
        </div>
        <div className="w-[170px] !m-[0] absolute top-[0px] left-[181px] rounded-3xs bg-royalblue-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-5 px-5 pb-[26px] box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[54px] w-[81px] relative tracking-[0.03em] font-black inline-block z-[1]">
            <p className="m-0">Podcast</p>
            <p className="m-0">Charts</p>
          </div>
        </div>
        <div className="w-[170px] !m-[0] absolute top-[111px] left-[0px] rounded-3xs bg-seagreen-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-5 pb-[26px] pr-[18px] pl-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[54px] flex-1 relative tracking-[0.03em] font-black inline-block z-[1]">
            <p className="m-0">Podcast New</p>
            <p className="m-0">Releases</p>
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[111px] left-[181px] rounded-3xs bg-crimson-400 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[60px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Video
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
