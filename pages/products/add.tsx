import LayoutMain from "@/component/Layout/LayoutMain";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import http from "../../utils/http";

type addProps = {};

export default function AddProduct(props: addProps) {
  const { mutate } = useMutation({
    mutationFn: (body) => {
      return http.post("products", body);
    },
  });
  return <LayoutMain>add</LayoutMain>;
}
