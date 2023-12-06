import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type Props = {
  color: string;
  title: string;
  author?: string;
  album?: string;
  liked: boolean;
  length: string;
  explicit?: boolean;
};

const MusicListItem = (props: Props) => {
  const color = `bg-[${props.color}]`;
  const clsx = cn(color, "w-12 h-12 rounded")
  return (
    <TableRow>
      <TableCell>
        <div className={clsx} />
      </TableCell>
      <TableCell>
        <p>{props.title}</p>
        {props.explicit && (
          <Avatar>
            <AvatarFallback>E</AvatarFallback>
          </Avatar>
        )}
      </TableCell>
      <TableCell>{props.author}</TableCell>
      <TableCell>{props.album}</TableCell>
    </TableRow>
  );
};

export default MusicListItem;
