import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import { useNavContext } from "../../_context/nav-context";
import SongTable from "./song-table";

type Props = {
  focusedPlaylist: string | null;
};

const FocusedPlaylist = ({ focusedPlaylist }: Props) => {
  const { playlists } = useAppSelector((state) => state.playlists);
  const playlist = playlists.filter((data) => data.id === focusedPlaylist)[0];

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10  bg-background mx-8 mt-8">
      <div className="flex gap-8 items-center mb-8">
        <div className="h-48 w-48 rounded-xl bg-accent" />
        <div className="flex flex-col gap-8 max-w-2xl">
          <div>
            <h2 className="w-full text-2xl">{playlist.playlistTitle}</h2>
            <p className="text-sm text-muted-foreground">
              {playlist.createdBy}
            </p>
            <p className="text-sm text-muted-foreground">100 songs</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Embark on a sonic adventure with soul-stirring melodies and
              heartfelt lyrics that speak to the human experience.
            </p>
          </div>
        </div>
      </div>
      <SongTable />
    </div>
  );
};

export default FocusedPlaylist;
