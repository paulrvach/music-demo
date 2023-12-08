import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";
import MusicCard from "./music-card";
import { SongType } from "./song-data";
import { Carousel } from "@/components/ui/carosuel";

interface Props extends ComponentProps<"div"> {
  title: string;
  musicData: SongType[];
}

const LargeCarousel = ({ musicData, className, title, ...props }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div {...props} className={cn("flex flex-col max-h-96", className)}>
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="mb-8 text-sm text-muted-foreground">Top picks for you. Updated daily.</p>
      <Carousel >
        {musicData.map((data, index) => (
          <MusicCard
            key={data.title}
            artist={"Artist"}
            color={data.color}
            songTitle={"Song title"}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default LargeCarousel;
