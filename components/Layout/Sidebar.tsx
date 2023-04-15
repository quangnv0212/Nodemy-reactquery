import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-grayfc">
      <Link href={"/"}>Home</Link>
      <Link href={"/login"}>Login</Link>
      <Link href={"/albums"}>Albums</Link>
    </div>
  );
};

export default Sidebar;
