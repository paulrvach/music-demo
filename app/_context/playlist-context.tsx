"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import type { SongType } from "../home/_components/song-data";

interface PlaylistContextProps {
  currentPlaylist: SongType[] | null;
  setCurrentPlaylist: Dispatch<SetStateAction<SongType[] | null>>;
}

export const PlaylistContext = createContext<PlaylistContextProps | undefined>({
  currentPlaylist: null,
  setCurrentPlaylist: () => null,
});

export function PlaylistContextProvider({
  children,
}: React.ComponentProps<"div">) {
  const [currentPlaylist, setCurrentPlaylist] = useState<SongType[] | null>(
    null
  );

  return (
    <PlaylistContext.Provider value={{ currentPlaylist, setCurrentPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
}

export function usePlaylistContext() {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error(
      "usePlaylistContext must be used within a PlaylistContextProvider"
    );
  }
  return context
}
