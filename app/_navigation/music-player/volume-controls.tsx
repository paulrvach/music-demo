'use client'
import React from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavContext } from "@/app/_context/nav-context";

const VolumeControls = () => {
  const { playlistVisible, setPlaylistVisible } = useNavContext();
  return (
    <div>
      <Button
        variant={"ghost"}
        className="group "
        onClick={() => {
          setPlaylistVisible(!playlistVisible);
        }}
        size={"icon"}
      >
        <ChevronUp
          size={24}
          className="group-hover:tranlate-y-3 transition-all duration-100"
        />
      </Button>
    </div>
  );
};

export default VolumeControls;
