import React from "react";
import { StepBack, Play, StepForward } from "lucide-react";
import { Button } from "@/components/ui/button";
type Props = {};

const PlayControls = (props: Props) => {
  return (
    <div className="flex flex-row gap-4">
      <Button variant={"ghost"} size={"icon"}>
        <StepBack size={32} />
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <Play size={32} />
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <StepForward size={32} />
      </Button>
    </div>
  );
};

export default PlayControls;
