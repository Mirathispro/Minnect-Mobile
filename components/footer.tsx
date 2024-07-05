import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full text-left text-sm text-fg-secondary font-small ${className}`}
    >
      <img
        className="h-[104px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
        alt=""
        src="/group-77@2x.png"
      />
      <div className="w-[41.7px] absolute !m-[0] bottom-[21px] left-[-30px] tracking-[0.03em] font-medium inline-block z-[2]">
        Audiobook
      </div>
      <div className="absolute !m-[0] bottom-[21px] left-[82px] tracking-[0.03em] font-medium inline-block min-w-[54px] z-[2]">
        Podcast
      </div>
      <div className="absolute !m-[0] right-[175px] bottom-[21px] tracking-[0.03em] font-medium text-fg-primary inline-block min-w-[39px] z-[2]">
        Music
      </div>
      <div className="absolute !m-[0] right-[102px] bottom-[21px] tracking-[0.03em] font-medium inline-block min-w-[33px] z-[2]">
        EDM
      </div>
      <div className="absolute !m-[0] right-[30px] bottom-[21px] tracking-[0.03em] font-medium inline-block min-w-[33px] z-[2]">
        Indie
      </div>
      <img
        className="h-3.5 w-3.5 absolute !m-[0] top-[21px] left-[70px] z-[2]"
        alt=""
        src="/location.svg"
      />
    </div>
  );
};

export default Footer;
