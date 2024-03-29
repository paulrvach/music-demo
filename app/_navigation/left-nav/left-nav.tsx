"use client";
import { Compass, Headphones, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Playlists from "./playlists";
import { useNavContext } from "@/app/_context/nav-context";
import { useRouter } from "next/navigation";

const LeftNav = () => {
  const { leftNavVisible } = useNavContext();
  const router = useRouter();
  return (
    <div
      className={cn(
        leftNavVisible ? "border-r-2 w-80 bg-card pr-4" : " ",
        "flex flex-col max-h-min"
      )}
    >
      <div className="flex flex-col gap-4 mb-4">
        <MenuIcon
          title="Home"
          open={leftNavVisible}
          onClick={() => {
            router.push("/home");
          }}
        >
          <Home size={24} />
        </MenuIcon>
        <MenuIcon title="Explore" open={leftNavVisible}>
          <Compass size={24} />
        </MenuIcon>
        <MenuIcon title="Library" open={leftNavVisible}>
          <Headphones size={24} />
        </MenuIcon>
      </div>
      {leftNavVisible ? (
        <div className="flex flex-col gap-6 ">
          <Separator className="" />
          <Playlists className="max-h-[40vh]" />
        </div>
      ) : null}
    </div>
  );
};

interface MenuIconProps extends React.ComponentProps<typeof Button> {
  open: boolean;
  title: string;
}

const MenuIcon = ({
  open,
  children,
  title,
  className,
  ...props
}: MenuIconProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "flex justify-start items-center w-full h-full p-2",
        open ? "flex-row gap-2" : "flex-col",
        className
      )}
      size={"icon"}
      variant={"ghost"}
    >
      {children}
      {open && <p>{title}</p>}
    </Button>
  );
};

export default LeftNav;
