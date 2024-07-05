import type { NextPage } from "next";

export type PlaylistListSongType = {
  className?: string;
  playlistSelectors?: string;
  getLucky?: string;
  daftPunk?: string;
};

const PlaylistListSong: NextPage<PlaylistListSongType> = ({
  className = "",
  playlistSelectors,
  getLucky,
  daftPunk,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-center justify-start py-2 px-0 gap-[10px] text-left text-base text-fg-primary font-small ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[173px] pl-0 box-border gap-[10px] min-w-[128px]">
        <img
          className="h-[51px] w-[51px] relative rounded-10xs object-cover"
          alt=""
          src={playlistSelectors}
        />
        <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
          <div className="relative tracking-[0.03em] font-medium inline-block min-w-[77px]">
            {getLucky}
          </div>
          <div className="self-stretch relative text-sm tracking-[0.03em] text-fg-secondary">
            {daftPunk}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start">
        <img className="h-10 w-10 relative" alt="" src="/pclike.svg" />
      </div>
    </div>
  );
};

export default PlaylistListSong;
