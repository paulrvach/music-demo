'use client'
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SearchBar from "./search-bar";
import Profile from "./profile";
import { Button } from "@/components/ui/button";
import { useNavContext } from "@/app/_context/nav-context";

const TopNav = () => {
  const { leftNavVisible, setLeftNavVisible } = useNavContext();
  return (
    <div className="fixed top-0 w-full py-4">
      <div className="flex justify-between w-[100vw] px-8">
        <Button
          variant={"ghost"}
          className="rounded-full"
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
