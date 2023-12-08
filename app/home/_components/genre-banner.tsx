import React from "react";
import { Badge, Badges } from "@/components/ui/badge";

type Props = {};

const GenreBanner = (props: Props) => {
  const musicGenres = [
    "Rock",
    "Pop",
    "Hip Hop",
    "Jazz",
    "Blues",
    "Country",
    "Electronic",
    "Classical",
    "R&B",
    "Reggae",
    "Funk",
    "Soul",
    "Metal",
    "Punk",
    "Indie",
    "Alternative",
    "Rap",
    "EDM",
    "Dubstep",
    "Gospel",
  ];

  return (
    <Badges length={8} className="gap-2">
      {musicGenres.map((genre) => (
        <Badge
          variant={"outline"}
          className="text-md font-normal hover:bg-primary hover:text-secondary hover:border-primary hover:shadow-lg hover:shadow-primary"
          key={genre}
        >
          {genre}
        </Badge>
      ))}
    </Badges>
  );
};

export default GenreBanner;
