import LayoutMain from "@/component/Layout/LayoutMain";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import productApi from "../../api/product-api";
import { Product, ProductListConfig } from "@/models/products";
import { Pagination, PaginationProps, Select } from "antd";
import Link from "next/link";
import { GetStaticProps } from "next";
import { ResponseApi } from "@/models/utils";
interface IProductListPage {
  productListResponse: ResponseApi<Product>;
}
export default function ProductListPage({
  productListResponse,
}: IProductListPage) {
  const router = useRouter();
  const { page, pageSize, sort } = router.query;
  const editQuery = {
    populate: "*",
    "pagination[page]": router.query.page || 1,
    "pagination[pageSize]": router.query.pageSize || 3,
    sort,
  };
  const { data } = useQuery<any>({
    queryKey: ["products", editQuery],
    queryFn: () => {
      return productApi.getProduct(editQuery as ProductListConfig);
    },
    initialData: productListResponse,
  });
  const handleNextPage = () => {
    router.push({
      query: {
        ...router.query,
        page: Number(page) + 1 || 1,
      },
    });
  };
  const handlePrePage = () => {
    if (page && Number(page) === 1) {
      return;
    } else {
      router.push({
        query: {
          ...router.query,
          page: Number(page) - 1,
        },
      });
    }
  };
  const handlePageChange = (value: string) => {
    router.push({
      query: {
        ...router.query,
        sort: value,
      },
    });
  };
  const handlePageSizeChange = (value: string) => {
    router.push({
      query: {
        ...router.query,
        pageSize: value,
      },
    });
  };
  return (
    <LayoutMain>
      Sắp xếp theo
      <Select
        placeholder="Sắp xếp theo"
        style={{ width: 200 }}
        onChange={handlePageChange}
        options={[
          { value: "createdAt:desc", label: "Mới nhất" },
          { value: "createdAt:asc", label: "Cũ nhất" },
          { value: "price:asc", label: "Giá tăng dần" },
          { value: "price:desc", label: "Giá giảm dần" },
        ]}
      />
      {data?.data.map((product: Product) => (
        <Link href={`/products/${product.attributes.slug}`} key={product.id}>
          <p>{product.attributes.name}</p>
        </Link>
      ))}
      <button
        className="m-2 rounded-lg bg-blue-300 p-2"
        onClick={handlePrePage}
      >
        Previous
      </button>
      <button
        className="m-2 rounded-lg bg-blue-300 p-2"
        onClick={handleNextPage}
      >
        Next
      </button>
      <p>Page Size</p>
      <Select
        placeholder="Hiển thị"
        style={{ width: 200 }}
        onChange={handlePageSizeChange}
        options={[
          { value: "2", label: "2 sản phẩm/trang" },
          { value: "3", label: "3 sản phẩm/trang" },
          { value: "4", label: "4 sản phẩm/trang" },
        ]}
      />
    </LayoutMain>
  );
}

export const getStaticProps: GetStaticProps<{
  productListResponse: ResponseApi<any>;
}> = async (context) => {
  const res = await productApi.getProduct({
    populate: "*",
    "pagination[page]": 1,
    "pagination[pageSize]": 3,
  });
  const productListResponse = await res;
  return {
    props: {
      productListResponse,
    },
  };
};
