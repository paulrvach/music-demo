"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface NavContextProps {
  playlistVisible: boolean;
  leftNavVisible: boolean;
  setPlaylistVisible: Dispatch<SetStateAction<boolean>>;
  setLeftNavVisible: Dispatch<SetStateAction<boolean>>;
}

export const NavContext = createContext<NavContextProps | undefined>({
  playlistVisible: false,
  leftNavVisible: true,
  setPlaylistVisible: () => null,
  setLeftNavVisible: () => null,
});

export function NavContextProvider({ children }: React.ComponentProps<"div">) {
  const [playlistVisible, setPlaylistVisible] = useState(false);
  const [leftNavVisible, setLeftNavVisible] = useState(true);

  return (
    <NavContext.Provider
      value={{
        playlistVisible,
        leftNavVisible,
        setPlaylistVisible,
        setLeftNavVisible,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
}
