import type { NextPage } from "next";
import PlaylistListSong from "./playlist-list-song";
import NowPlaying from "./now-playing";

export type PlaylistListType = {
  className?: string;
};

const PlaylistList: NextPage<PlaylistListType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[338px] flex-1 relative max-w-full text-left text-base text-fg-primary font-small ${className}`}
    >
      <div className="absolute top-[0px] left-[7px] w-[361px] flex flex-col items-start justify-start">
        <PlaylistListSong
          playlistSelectors="/playlist-selectors@2x.png"
          getLucky="Get Lucky"
          daftPunk="Daft Punk"
        />
        <PlaylistListSong
          playlistSelectors="/playlist-selectors@2x.png"
          getLucky="Instant Crush"
          daftPunk="Daft Punk, Julian Casablancas"
        />
        <PlaylistListSong
          playlistSelectors="/rectangle-7@2x.png"
          getLucky="On Melancholy Hill"
          daftPunk="Gorillaz"
        />
        <PlaylistListSong
          playlistSelectors="/rectangle-6@2x.png"
          getLucky="Tainted Love"
          daftPunk="Soft Cell"
        />
        <PlaylistListSong
          playlistSelectors="/rectangle-6@2x.png"
          getLucky="One More Time"
          daftPunk="Daft Punk"
        />
        <PlaylistListSong
          playlistSelectors="/rectangle-6@2x.png"
          getLucky="Electric Feel"
          daftPunk="MGMT"
        />
        <PlaylistListSong
          playlistSelectors="/playlist-selectors@2x.png"
          getLucky="Give Life Back to Music"
          daftPunk="Daft Punk"
        />
      </div>
      <NowPlaying />
    </div>
  );
};

export default PlaylistList;
