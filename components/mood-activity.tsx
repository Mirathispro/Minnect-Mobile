import type { NextPage } from "next";

export type MoodActivityType = {
  className?: string;
};

const MoodActivity: NextPage<MoodActivityType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pr-[9px] pl-0 box-border max-w-full text-left text-xl text-white font-satoshi ${className}`}
    >
      <div className="h-[445px] flex-1 overflow-x-auto flex flex-row flex-wrap items-center justify-between relative max-w-full">
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[0px] left-[0px] rounded-3xs bg-slateblue overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border whitespace-nowrap">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[97px] relative tracking-[0.03em] font-black inline-block z-[1]">
            In the car
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[0px] left-[181px] rounded-3xs bg-mediumvioletred-100 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[58px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Mood
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[115px] left-[0px] rounded-3xs bg-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[87px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Workout
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[115px] left-[181px] rounded-3xs bg-orangered overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[47px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Chill
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[230px] left-[0px] rounded-3xs bg-darkslateblue-100 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-14 relative tracking-[0.03em] font-black inline-block z-[1]">
            Sleep
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[230px] left-[181px] rounded-3xs bg-steelblue-100 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[54px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Party
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[345px] left-[0px] rounded-3xs bg-steelblue-200 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border whitespace-nowrap">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[88px] relative tracking-[0.03em] font-black inline-block z-[1]">
            At Home
          </div>
        </div>
        <div className="h-[100px] w-[170px] !m-[0] absolute top-[345px] left-[181px] rounded-3xs bg-dimgray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border">
          <img
            className="h-[142.4px] w-[142.4px] absolute !m-[0] right-[-30.3px] bottom-[-64.4px] rounded-8xs object-contain"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[27px] w-[59px] relative tracking-[0.03em] font-black inline-block z-[1]">
            Focus
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodActivity;
