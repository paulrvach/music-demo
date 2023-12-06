'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavContext } from '../_context/nav-context';
import FocusedPlaylist from './_components/focused-playlist';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

type Props = {};

const HomePage = (props: Props) => {
  const searchParams = useSearchParams();
  const { playlistVisible, setPlaylistVisible } = useNavContext();
  const focusedPlaylist = searchParams.get('playlist');

  useEffect(() => {
    setPlaylistVisible(true);
  }, [focusedPlaylist, setPlaylistVisible]);

  return (
    <ScrollArea className='w-full h-full'>
      <div className=' w-full h-full pr-4'>
        {focusedPlaylist && playlistVisible && (
          <FocusedPlaylist focusedPlaylist={focusedPlaylist} />
        )}
      </div>
    </ScrollArea>
  );
};

export default HomePage;
