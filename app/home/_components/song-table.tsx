import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MusicListItem from "./music-list-item";
import { songs } from "./song-data";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {};

const SongTable = (props: Props) => {
  return (
    <Table className="w-5/6">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Art</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Artist</TableHead>
          <TableHead className="text-right">Album</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-min">
        {songs.map((song) => (
          <MusicListItem
            length="00:00"
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
