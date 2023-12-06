"use client";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type PlaylistType = {
  playlists: {
    id: string;
    playlistTitle: string;
    createdBy: string;
    privacy: "public" | "private";
  }[];
};

const initialState: PlaylistType = {
  playlists: [
    {
      id: "e5759a5f-d0d2-4de2-a765-32ecc066943c",
      playlistTitle: "Groovy Vibes",
      createdBy: "DJ Mastermind",
      privacy: "public",
    },
    {
      id: "c9a84b7a-aba5-421f-9277-ce3bfb57e559",
      playlistTitle: "Chill Beats",
      createdBy: "Music Explorer",
      privacy: "private",
    },
    {
      id: "3f2ac188-8a00-41d9-a651-5f4d5cc1d781",
      playlistTitle: "Electro Fusion",
      createdBy: "Sound Wizard",
      privacy: "public",
    },
    {
      id: "00b23cee-5679-4a98-a8a7-604f515b7756",
      playlistTitle: "Soulful Melodies",
      createdBy: "Harmony Seeker",
      privacy: "private",
    },
    {
      id: "073d08ae-4c42-47c1-bbcf-89bb42ac2850",
      playlistTitle: "Rock Anthems",
      createdBy: "Guitar Guru",
      privacy: "public",
    },
    {
      id: "6be9b9ff-2bf0-4319-838e-fa877049ed39",
      playlistTitle: "Dance Party Madness",
      createdBy: "Rhythm Enthusiast",
      privacy: "public",
    },
    {
      id: "acc22ac0-a415-42a8-973b-0485f8cbf679",
      playlistTitle: "Jazz Journey",
      createdBy: "Smooth Operator",
      privacy: "private",
    },
  ],
};

// Create a slice using Redux Toolkit
const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setPlaylists: (
      state,
      action: PayloadAction<
        {
          playlistTitle: string;
          createdBy: string;
          privacy: "public" | "private";
          id: string;
        }[]
      >
    ) => {
      state.playlists = action.payload;
    },
  },
});

// Export actions and reducer
export const { setPlaylists } = playlistsSlice.actions;

export default playlistsSlice.reducer;
