"use client";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { SongType, songs } from "@/app/home/_components/song-data";
import { setSongInFocus } from "@/redux/slices/playlistSlice";
import { useAppDispatch } from "@/redux/hooks";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Search } from "lucide-react";

type Props = {};

const SearchBar = (props: Props) => {
  const [music, setMusic] = useState<{ [key: string]: SongType }>({});
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    const musicDataHash: { [key: string]: SongType } = {};

    songs.forEach((song) => {
      musicDataHash[song.title] = song;
    });

    setMusic(musicDataHash);
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="max-w-xl w-full justify-between"
        >
          {"Search for a song..."}
          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-screen max-w-xl p-0">
        <Command>
          <CommandInput placeholder="Search playlist..." />
          <CommandEmpty>No songs found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {Object.keys(music).map((song) => (
                <CommandItem key={music[song].title}>
                  <div
                    onClick={() => {
                      dispatch(setSongInFocus(music[song]));
                    }}
                    className="h-16 cursor-pointer flex items-center gap-2 hover:bg-secondary/50 rounded p-2 w-full"
                  >
                    <div
                      className={cn("w-12 h-12 rounded", music[song].color)}
                    />
                    <div className="flex flex-col">
                      <p>{music[song].title}</p>
                      <p className="text-sm text-muted-foreground">
                        {music[song].author}
                      </p>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchBar;
