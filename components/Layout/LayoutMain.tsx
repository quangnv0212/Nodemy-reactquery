import React, { ReactNode } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
type LayoutMainProps = {
  children: ReactNode;
};

export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
        <Sidebar></Sidebar>
        <div>{children}</div>
      </div>
    </>
  );
}
