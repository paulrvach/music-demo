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

type Props = {};

const SongTable = (props: Props) => {
  return (
    <Table className="">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
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
