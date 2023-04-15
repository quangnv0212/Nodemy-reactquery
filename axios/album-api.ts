import { AlbumListConfig } from "../models";
import axiosClient from "./axios-client";
const URL = "albums";
export const albumApi = {
  getAlbums(params: AlbumListConfig) {
    return axiosClient.get(URL), { params };
  },
  getAlbumDetail(id: string) {
    return axiosClient.get(`${URL}/${id}`);
  },
};
