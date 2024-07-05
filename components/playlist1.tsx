import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type Playlist1Type = {
  className?: string;
};

const Playlist1: NextPage<Playlist1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onPlaylistContainerClick = useCallback(() => {
    router.push("/playlist");
  }, [router]);

  return (
    <div
      className={`w-[141.1px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[6.3px] box-border gap-[0.8px] cursor-pointer text-left text-xs-6 text-fg-primary font-small ${className}`}
      onClick={onPlaylistContainerClick}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-1.5">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.8px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-2">
            <div className="h-[2.5px] flex-1 relative rounded-t-[6.02px] rounded-b-none bg-paleturquoise-500" />
          </div>
          <div className="self-stretch h-[5px] relative rounded-t-[6.02px] rounded-b-none bg-paleturquoise-600" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.2px]">
        <div className="h-[141.1px] flex-1 relative rounded-[6.02px] overflow-hidden bg-[url('/image-3@2x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="absolute top-[calc(50%_-_70.35px)] left-[calc(50%_-_70.55px)] w-full h-full object-cover hidden"
            alt=""
            src="/image-3@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_70.35px)] left-[calc(50%_-_70.55px)] w-full h-full object-cover z-[1]"
            alt=""
            src="/image-6@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_70.35px)] left-[calc(50%_-_70.55px)] w-full h-full object-cover z-[2]"
            alt=""
            src="/image-7@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5.9px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[25.4px]">
          <div className="flex-1 relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            Daily Mix 1
          </div>
          <div className="relative tracking-[0.03em] text-paleturquoise-200 inline-block min-w-[16px]">
            50
          </div>
        </div>
      </div>
      <div className="self-stretch relative text-3xs tracking-[0.03em] text-fg-secondary">
        Linkin Park, System Of A Down, Coal Chamber...
      </div>
    </div>
  );
};

export default Playlist1;
