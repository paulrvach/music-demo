'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavContext } from '../_context/nav-context';
import FocusedPlaylist from './_components/focused-playlist';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import HomePage from './_components/home-page';

type Props = {};

const Main = (props: Props) => {
  const searchParams = useSearchParams();
  const { playlistVisible, setPlaylistVisible } = useNavContext();
  const focusedPlaylist = searchParams.get('playlist');

  useEffect(() => {
    setPlaylistVisible(true);
  }, [focusedPlaylist, setPlaylistVisible]);

  return (
    <ScrollArea className='w-full h-full'>
      <div className=' max-w-[99%] overflow-x-hidden h-full pr-4'>
        <HomePage />
        {focusedPlaylist && playlistVisible && (
          <FocusedPlaylist focusedPlaylist={focusedPlaylist} />
        )}
      </div>
    </ScrollArea>
  );
};

export default Main;
