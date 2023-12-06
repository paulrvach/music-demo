import React, { ComponentProps } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Props extends ComponentProps<typeof TableRow> {
  color: string;
  title: string;
  author?: string;
  album?: string;
  liked: boolean;
  length: string;
  explicit?: boolean;
}

const MusicListItem = ({
  color,
  title,
  author,
  album,
  liked,
  length,
  explicit,
  ...props
}: Props) => {
  const clsx = cn(color, 'w-12 h-12 rounded');
  return (
    <TableRow {...props}>
      <TableCell className='text-sm'>
        <div className={clsx} />
      </TableCell>
      <TableCell className='text-sm '>
        <p className='text-left inline'>{title}</p>
        {explicit && (
          <p className='text-left bg-primary text-secondary rounded-md w-min px-1 text-xs ml-3 inline-block'>
            E
          </p>
        )}
      </TableCell>
      <TableCell className='text-sm'>{author}</TableCell>
      <TableCell className='text-sm'>{album}</TableCell>
      <TableCell className='text-sm'>{length}</TableCell>
    </TableRow>
  );
};

export default MusicListItem;
