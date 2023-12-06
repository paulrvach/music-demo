import PlayControls from "./play-controls";
import SongBanner from "./song-banner";
import VolumeControls from "./volume-controls";
import { Slider } from "@/components/ui/slider";

const MusicPlayer = () => {
  return (
    <div className=" w-full bg-background z-30 h-min">
      <Slider defaultValue={[33]} max={100} step={1} />

      <div className="w-full flex flex-row items-center justify-between px-6 py-4 ">
        <PlayControls />
        <SongBanner
          albumArt={{
            src: "https://lh3.googleusercontent.com/jW7XJb2Qw7iWn8RggdgrU-y_Zc6oNF69holS07lnT-7g_fRGLKAUHZIXseWK6YYvDH8liOXL7owTkSOL=w60-h60-l90-rj",
            height: 60,
            width: 60,
          }}
          artist="Artist"
          title="Lofi-Beats"
        />
        <VolumeControls />
      </div>
    </div>
  );
};

export default MusicPlayer;
