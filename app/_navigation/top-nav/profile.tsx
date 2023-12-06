import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

const Profile = (props: Props) => {
  return (
    <Avatar>
      {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
      <AvatarFallback>P</AvatarFallback>
    </Avatar>
  );
};

export default Profile;
