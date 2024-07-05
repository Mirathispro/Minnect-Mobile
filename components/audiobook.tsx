import type { NextPage } from "next";

export type AudiobookType = {
  className?: string;
};

const Audiobook: NextPage<AudiobookType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[23px] text-left text-lg text-fg-primary font-small ${className}`}
    >
      <div className="w-[210px] h-6 relative tracking-[0.03em] font-medium inline-block">
        Audiobooks
      </div>
      <div className="self-stretch h-[322px] overflow-x-auto shrink-0 flex flex-row flex-wrap items-center justify-start relative gap-[11px] text-xl text-white font-satoshi">
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[0px] left-[0px] rounded-3xs bg-darkslateblue-100 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[120px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Audiobooks
          </div>
        </div>
        <div className="w-[170px] !m-[0] absolute top-[0px] left-[181px] rounded-3xs bg-mediumpurple overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[19.8px] px-[19px] pb-[14.2px] box-border whitespace-nowrap text-base">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[66px] flex-1 relative tracking-[0.03em] font-black inline-block z-[1]">{`Sci-Fi & Fantasy Essentials`}</div>
        </div>
        <div className="w-[170px] !m-[0] absolute top-[111px] left-[0px] rounded-3xs bg-dimgray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-5 px-5 pb-[26px] box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[54px] w-[99px] relative tracking-[0.03em] font-black inline-block z-[1]">
            <p className="m-0">{`Fiction &`}</p>
            <p className="m-0">Literature</p>
          </div>
        </div>
        <div className="w-[170px] !m-[0] absolute top-[111px] left-[181px] rounded-3xs bg-darkslateblue-100 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[19.8px] px-[19px] pb-[26.2px] box-border whitespace-nowrap">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[54px] w-[117px] relative tracking-[0.03em] font-black inline-block shrink-0 z-[1]">{`Mystery & Thriller`}</div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[222px] left-[0px] rounded-3xs bg-teal overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[95px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Self-Help
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audiobook;
