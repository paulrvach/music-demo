'use client'
import PlayControls from './play-controls';
import SongBanner from './song-banner';
import VolumeControls from './volume-controls';
import { Slider } from '@/components/ui/slider';
import { useAppSelector } from '@/redux/hooks';

const MusicPlayer = () => {
  const { songInFocus } = useAppSelector((state) => state.playlists);
  return (
    <div className=' w-full bg-background z-30 h-min'>
      <Slider defaultValue={[33]} max={100} step={1} />

      <div className='w-full flex flex-row items-center justify-between px-6 py-4 '>
        <PlayControls />
        <SongBanner
          color={songInFocus?.color as string}
          artist={songInFocus?.author as string}
          title={songInFocus?.title as string}
        />
        <VolumeControls />
      </div>
    </div>
  );
};

export default MusicPlayer;
