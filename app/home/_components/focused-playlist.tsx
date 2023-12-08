import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import SongTable from "./song-table";
import { songs } from "./song-data";
import { usePlaylistContext } from "@/app/_context/playlist-context";

type Props = {
  focusedPlaylist: string | null;
};

const FocusedPlaylist = ({ focusedPlaylist }: Props) => {
  const { playlists } = useAppSelector((state) => state.playlists);
  const playlist = playlists.filter((data) => data.id === focusedPlaylist)[0];
  const { currentPlaylist, setCurrentPlaylist } = usePlaylistContext();

  useEffect(() => {
    const filteredSongs = songs.filter((song) =>
      song.playlist.includes(focusedPlaylist as string)
    );
    setCurrentPlaylist(filteredSongs);
  }, [focusedPlaylist, setCurrentPlaylist]);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10  bg-background mx-8 ">
      <ScrollArea className="w-full h-full">
        <div className="flex gap-8 items-center mb-8">
          <div className="h-48 w-48 rounded-xl bg-accent" />
          <div className="flex flex-col gap-8 max-w-2xl">
            <div>
              <h2 className="w-full text-2xl">{playlist.playlistTitle}</h2>
              <p className="text-sm text-muted-foreground">
                {playlist.createdBy}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentPlaylist?.length} songs
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Embark on a sonic adventure with soul-stirring melodies and
                heartfelt lyrics that speak to the human experience.
              </p>
            </div>
          </div>
        </div>
        <SongTable
          focusedPlaylist={focusedPlaylist}
          filteredSongs={currentPlaylist}
        />
      </ScrollArea>
    </div>
  );
};

export default FocusedPlaylist;
