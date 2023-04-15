import { ResponseApi } from "@/models/utils";
import { Product, ProductListConfig, ProductRespone } from "../models";
import http from "../utils/http";

const URL = "api/products";
const productApi = {
  getProduct(params: ProductListConfig) {
    return http.get(URL, { params });
  },
  getProductDetail(slug: string) {
    return http.get<ResponseApi<Product>>(`${URL}/${slug}`);
  },
};

export default productApi;
