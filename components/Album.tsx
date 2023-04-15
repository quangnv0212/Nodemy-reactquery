import React from "react";
import { Album } from "../models";

type AlbumProps = {
  album: Album;
};

export default function AlbumCard({ album }: AlbumProps) {
  const handleAddToCart = (album: Album) => {};
  return (
    <>
      {album &&
        album.attributes &&
        album.attributes.artists.data.length > 0 && (
          <div className="max-w-sm transform rounded-xl bg-white px-6 pb-2 pt-6 shadow-lg transition duration-500 hover:scale-105">
            <h3 className="mb-3 text-xl font-bold uppercase text-indigo-600">
              {album.attributes.mood == "chill" && (
                <span className="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-xl font-bold text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                  Chill
                </span>
              )}
              {album.attributes.mood == "ngau" && (
                <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xl font-bold text-green-800 dark:bg-green-900 dark:text-green-300">
                  Ngầu
                </span>
              )}
              {album.attributes.mood == "rau" && (
                <span className="mr-2 rounded bg-pink-100 px-2.5 py-0.5 text-xl font-bold text-pink-800 dark:bg-pink-900 dark:text-pink-300">
                  Rầu
                </span>
              )}
              {album.attributes.mood == "gat" && (
                <span className="mr-2 rounded bg-gray-100 px-2.5 py-0.5 text-xl font-bold text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  Gắt
                </span>
              )}
            </h3>
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src={`http://localhost:1337${album.attributes.image.data[0].attributes.url}`}
                alt="Colors"
              />
            </div>
            <h1 className="mt-4 text-center text-2xl font-bold text-gray-800">
              {album.attributes.name}
            </h1>

            <div className="my-4">
              <p className="text-center text-xl">
                {album.attributes.artists.data[0].attributes.name}
              </p>
              <p className="text-center font-bold">
                {album.attributes.price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <button
                onClick={() => handleAddToCart(album)}
                className="mt-4 w-full border border-black bg-yellow-300 py-2 text-xl uppercase text-black shadow-lg"
              >
                Add to cart
              </button>
            </div>
          </div>
        )}
    </>
  );
}
