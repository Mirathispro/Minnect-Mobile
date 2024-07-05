import type { NextPage } from "next";

export type ProfileImageType = {
  className?: string;
};

const ProfileImage: NextPage<ProfileImageType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-3.5 pl-[15px] box-border max-w-full text-left text-xl text-fg-primary font-small ${className}`}
    >
      <div className="flex-1 rounded-xl [background:linear-gradient(180.48deg,_rgba(138,_53,_74,_0.47),_rgba(17,_17,_17,_0.47)_91.55%)] box-border flex flex-row flex-wrap items-end justify-start pt-[3px] pb-[18px] pr-[3px] pl-[19px] gap-[16px] max-w-full border-[2px] border-solid border-gray-300">
        <img
          className="h-[95px] w-[95px] relative rounded-81xl object-contain"
          alt=""
          src="/sprite0002-1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border min-w-[146px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[11.6px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <b className="h-[27px] relative tracking-[0.03em] inline-block min-w-[35px]">
                  Jux
                </b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[7.6px]">
                <div className="h-[40.4px] w-[40.4px] relative">
                  <img
                    className="absolute top-[7.3px] left-[7.3px] w-[25.5px] h-[25.5px] object-contain"
                    alt=""
                    src="/group-99@2x.png"
                  />
                </div>
                <img
                  className="h-[40.4px] w-[40.4px] relative min-h-[40px]"
                  alt=""
                  src="/icons-big62.svg"
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-start pt-0 pb-[29px] pr-7 pl-0 relative gap-[10px_6px] text-sm">
              <div className="relative tracking-[0.03em] inline-block min-w-[71px]">
                <span>{`3 `}</span>
                <span className="text-fg-secondary">followers</span>
              </div>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="w-[3px] h-[3px] relative rounded-[50%] bg-fg-secondary" />
              </div>
              <div className="relative tracking-[0.03em] inline-block min-w-[82px]">
                <span>{`30 `}</span>
                <span className="text-fg-secondary">following</span>
              </div>
              <div className="absolute !m-[0] right-[-7px] bottom-[0px] tracking-[0.03em] text-fg-secondary">
                31z6y5ynbcaogtsjzzpinxeue6xu
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
