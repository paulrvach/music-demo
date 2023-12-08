import React from "react";
import { StepBack, Play, StepForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setSongInFocus } from "@/redux/slices/playlistSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { usePlaylistContext } from "@/app/_context/playlist-context";
import { SongType } from "@/app/home/_components/song-data";

type Props = {};

const PlayControls = (props: Props) => {
  const { currentPlaylist } = usePlaylistContext();
  const dispatch = useAppDispatch();
  const { songInFocus } = useAppSelector((state) => state.playlists);

  const handleStepBack = () => {
    let prevoiusSong = 0;
    if (!currentPlaylist) throw new Error("currentPlaylist is not defined.");
    for (let index = 0; index < currentPlaylist.length; index++) {
      const element = currentPlaylist[index];
      if (songInFocus?.title === element.title) {
        prevoiusSong = index - 1;
        if (prevoiusSong < 0) prevoiusSong = currentPlaylist.length - 1;
      }
    }
    dispatch(setSongInFocus(currentPlaylist[prevoiusSong]));
  };
  const handleStepForward = () => {
    let prevoiusSong = 0;
    if (!currentPlaylist) throw new Error("currentPlaylist is not defined.");
    for (let index = 0; index < currentPlaylist.length; index++) {
      const element = currentPlaylist[index];
      if (songInFocus?.title === element.title) {
        prevoiusSong = index + 1;
        if (prevoiusSong > currentPlaylist.length - 1) prevoiusSong = 0;
      }
    }
    dispatch(setSongInFocus(currentPlaylist[prevoiusSong]));
  };

  return (
    <div className="flex flex-row gap-4">
      <Button onClick={handleStepBack} variant={"ghost"} size={"icon"}>
        <StepBack size={32} />
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <Play size={32} />
      </Button>
      <Button onClick={handleStepForward} variant={"ghost"} size={"icon"}>
        <StepForward size={32} />
      </Button>
    </div>
  );
};

export default PlayControls;
