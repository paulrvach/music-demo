import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  artist: string;
  albumArt: { src: string; height: number; width: number };
};

const SongBanner = ({ albumArt, artist, title }: Props) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="w-16 h-16">
        <Image
          src={albumArt?.src}
          height={albumArt?.height}
          width={albumArt?.width}
          alt={title}
        />
      </div>
      <div className="flex flex-col h-full justify-between">
        <p>{title}</p>
        <p className="text-sm text-muted-foreground">{artist}</p>
      </div>
    </div>
  );
};

export default SongBanner;
