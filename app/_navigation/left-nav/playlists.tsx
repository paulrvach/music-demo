import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppSelector } from "@/redux/hooks";
import AddPlaylistModal from "./add-playlist-modal";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

const Playlists = (props: Props) => {
  const { playlists } = useAppSelector((state) => state.playlists);
  const router = useRouter();

  return (
    <div className="">
      <div className="w-full flex items-center justify-center flex-col">
        <AddPlaylistModal playlists={playlists} />
      </div>
      <ScrollArea className="h-[52vh]">
        <div className="flex flex-col gap-4 items-start justify-start mt-4 pr-3 ">
          {playlists.map((playlist) => (
            <Button
              onClick={() => {
                router.push(`/home?playlist=${playlist.id}`);
              }}
              key={playlist.playlistTitle}
              className="w-full flex-col items-start pl-2 cursor-pointer py-2 h-full"
              variant={"ghost"}
              size={"lg"}
              asChild
            >
              <div>
                <p className="w-full overflow-hidden">
                  {playlist.playlistTitle}
                </p>
                <div className="flex gap-1 items-center justify-center">
                  {playlist.privacy === "private" ? <Lock size={16} /> : null}
                  <p className="text-sm text-muted-foreground ">
                    {playlist.createdBy}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Playlists;
