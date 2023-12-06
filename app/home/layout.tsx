import React from "react";

function layout({ children }: React.ComponentProps<"div">) {
  return <div className="mt-16 w-full">{children}</div>;
}

export default layout;
