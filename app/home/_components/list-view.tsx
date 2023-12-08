"use client";
import React, { ComponentProps } from "react";
import { SongType } from "./song-data";
import { cn } from "@/lib/utils";
import { songs } from "./song-data";
import { setSongInFocus } from "@/redux/slices/playlistSlice";
import { useAppDispatch } from "@/redux/hooks";

interface Props extends ComponentProps<"div"> {
  title: string;
  musicData: SongType[];
}

const ListView = ({ musicData, title, className }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={cn("", className)}>
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Top picks for you. Updated daily.
      </p>
      <div className="grid grid-cols-2 grid-rows-4">
        {songs.slice(20).map((song, index) => (
          <div
            key={song.title}
            className="h-16 cursor-pointer flex items-center gap-2 hover:bg-secondary/50 rounded p-2"
            onClick={() => {
              dispatch(setSongInFocus(song));
            }}
          >
            <div className={cn("w-12 h-12 rounded", song.color)} />
            <div className="flex flex-col">
              <p>{song.title}</p>
              <p className="text-sm text-muted-foreground">{song.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;
