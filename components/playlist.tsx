import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type PlaylistType = {
  className?: string;
};

const Playlist: NextPage<PlaylistType> = ({ className = "" }) => {
  const router = useRouter();

  const onPlaylistContainerClick = useCallback(() => {
    router.push("/playlist");
  }, [router]);

  return (
    <div
      className={`w-[141.1px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[6.3px] box-border gap-[5.8px] cursor-pointer text-left text-xs-6 text-fg-primary font-small ${className}`}
      onClick={onPlaylistContainerClick}
    >
      <div className="w-[93.9px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[0.8px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px]">
          <div className="h-[2.5px] w-[110.4px] relative rounded-t-[6.02px] rounded-b-none bg-pink-400 shrink-0" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5">
          <div className="h-[5px] w-[127.8px] relative rounded-t-[6.02px] rounded-b-none bg-pink-500 shrink-0" />
        </div>
        <div className="rounded-[6.02px] overflow-hidden flex flex-row items-start justify-start pt-[0.3px] px-0 pb-0 bg-[url('/image-3@2x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="h-[141.1px] w-[141.1px] relative object-cover hidden min-h-[141px]"
            alt=""
            src="/image-3@2x.png"
          />
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-full w-[73.9px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[141.1px] object-cover z-[1]"
                alt=""
                src="/image-6@2x.png"
              />
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[141.1px] object-cover z-[2]"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
            <img
              className="h-[141.1px] w-[141.1px] relative object-cover z-[3]"
              alt=""
              src="/image-8@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-4 flex flex-row items-start justify-start gap-[25.5px]">
        <div className="flex-1 relative tracking-[0.03em] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          Daily Mix 2
        </div>
        <div className="self-stretch w-4 relative tracking-[0.03em] text-pink-200 inline-block">
          50
        </div>
      </div>
      <div className="self-stretch relative text-3xs tracking-[0.03em] text-fg-secondary">
        Avril Lavigne, Lorde, Charli XCX and more
      </div>
    </div>
  );
};

export default Playlist;
