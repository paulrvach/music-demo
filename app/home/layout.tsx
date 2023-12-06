import React from "react";

function layout({ children }: React.ComponentProps<"div">) {
  return <div className="w-full">{children}</div>;
}

export default layout;
