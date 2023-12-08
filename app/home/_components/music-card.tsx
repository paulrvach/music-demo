import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

interface MusicCardProps extends ComponentProps<"div"> {
  songTitle: string;
  artist: string;
  color: string;
}

const MusicCard = ({
  color,
  songTitle,
  artist,
  className,
  ...props
}: MusicCardProps) => {
  return (
    <div className={cn("flex flex-col gap-2 w-full", className)} {...props}>
      <div className={cn("h-48 rounded-md w-full", color)} />
      <div className=" ">
        <p className="flex-none  ">{songTitle}</p>
        <p className="text-sm text-muted-foreground">{artist}</p>
    </div>
    </div>
  );
};

export default MusicCard;
