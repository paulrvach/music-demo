'use client'
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SearchBar from "./search-bar";
import Profile from "./profile";
import { Button } from "@/components/ui/button";
import { useNavContext } from "@/app/_context/nav-context";

const TopNav = () => {
  const { leftNavVisible, setLeftNavVisible } = useNavContext();
  return (
    <div className="h-min  py-4">
      <div className="flex justify-between">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="p-2"
          onClick={() => {
            setLeftNavVisible(!leftNavVisible);
          }}
        >
          <HamburgerMenuIcon className="w-6 h-6 " />
        </Button>
        <SearchBar />
        <Profile />
      </div>
    </div>
  );
};

export default TopNav;
