"use client";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setPlaylists } from "@/redux/slices/playlistSlice";
import { v4 as uuidv4 } from "uuid";

const formSchema = z.object({
  id: z.string(),
  playlistName: z
    .string({ required_error: "Title is required" })
    .min(2)
    .max(50),
  createdBy: z.string().max(255),
  privacy: z.enum(["private", "public"]),
});

export const PublicForm = () => {};

type Props = {
  playlists: {
    id: string;
    playlistTitle: string;
    createdBy: string;
    privacy: "private" | "public";
  }[];
};

const AddPlaylistModal = ({ playlists }: Props) => {
  const dispacth = useAppDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      playlistName: "",
      createdBy: "",
      privacy: "private",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const updatedPlaylist: Props["playlists"] = [
      ...playlists,
      {
        id: uuidv4(),
        playlistTitle: values.playlistName,
        createdBy: values.createdBy,
        privacy: values.privacy,
      },
    ];

    dispacth(setPlaylists(updatedPlaylist));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          className="flex gap-2 w-full rounded-full"
        >
          <Plus size={24} />
          <p> New Playlist</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Are you sure absolutely sure?</DialogTitle>
        <DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="playlistName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="My Playlist" {...field} />
                    </FormControl>
                    <FormDescription>This is the display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="createdBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Created By</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormDescription>Author your playlist.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Privacy</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Privacy" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>Select a privacy policy.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogClose asChild>
                <Button type="submit">Submit</Button>
              </DialogClose>
            </form>
          </Form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlaylistModal;
