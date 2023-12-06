import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import MusicListItem from './music-list-item';
import { type SongType } from './song-data';

type Props = {
  focusedPlaylist?: string | null;
  filteredSongs: SongType[]

};

const SongTable = ({ focusedPlaylist, filteredSongs }: Props) => {
  
  return (
    <Table className='w-[98%]'>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className=''>Art</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Artist</TableHead>
          <TableHead className=''>Album</TableHead>
          <TableHead className=''>Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className='w-min'>
        {filteredSongs.map((song) => (
          <MusicListItem
            length={song.length}
            key={song.title}
            color={song.color}
            album={song.album}
            title={song.title}
            author={song.author}
            liked={song.liked}
            explicit={song.explicit}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default SongTable;
