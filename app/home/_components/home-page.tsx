import React from "react";
import LargeCarousel from "./large-carousel";
import ListView from "./list-view";
import GenreBanner from "./genre-banner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { songs } from "./song-data";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="">
      <ScrollArea className="h-[80vh]">
        <div className="flex flex-col gap-24 px-24 mt-8 max-w-full ">
          <div className="flex flex-col gap-6">
            <GenreBanner />
            <LargeCarousel musicData={songs} title="Recently Viewed" />
          </div>
          <ListView musicData={songs} title="Quick Picks" />
        </div>
      </ScrollArea>
    </div>
  );
};

export default HomePage;
