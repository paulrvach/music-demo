import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  artist: string;
  color: string;
};

const SongBanner = ({ color, artist, title }: Props) => {
  return (
    <div className="flex flex-row items-center gap-4 justify-center">
      <div className={cn(color, "w-16 h-16 rounded")} />
      <div className="flex flex-col h-full justify-between">
        <p>{title}</p>
        <p className="text-sm text-muted-foreground">{artist}</p>
      </div>
    </div>
  );
};

export default SongBanner;
