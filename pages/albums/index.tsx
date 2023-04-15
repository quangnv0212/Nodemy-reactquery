import AlbumCard from "@/component/Album";
import LayoutMain from "@/component/Layout/LayoutMain";
import { Album } from "@/models/album";
import { useRouter } from "next/router";
import React, { useState } from "react";

type PageProp = {
  page: number;
  pageSize: number;
};
export default function AlbumPage(props: any) {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  return (
    <LayoutMain>
      <button
        onClick={() => {
          setPageIndex(pageIndex - 1);
        }}
      >
        Previous
      </button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </LayoutMain>
  );
}
