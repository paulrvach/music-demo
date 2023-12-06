"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavContext } from "../_context/nav-context";
import FocusedPlaylist from "./_components/focused-playlist";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {};

const HomePage = (props: Props) => {
  const searchParams = useSearchParams();
  const { playlistVisible, setPlaylistVisible } = useNavContext();
  const focusedPlaylist = searchParams.get("playlist");

  useEffect(() => {
    setPlaylistVisible(true);
  }, [focusedPlaylist, setPlaylistVisible]);

  return (
    <div className="relative w-full h-full pr-4">
      <ScrollArea className="w-full h-full">
        {focusedPlaylist && playlistVisible && (
          <FocusedPlaylist focusedPlaylist={focusedPlaylist} />
        )}
      </ScrollArea>
    </div>
  );
};

export default HomePage;
