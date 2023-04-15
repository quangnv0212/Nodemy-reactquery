export interface Album {
  id: number;
  attributes: {
    name: string;
    year: number;
    price: number;
    color: string;
    status: "new" | "ex";
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    countIStock: number;
    mood: "chill" | "ngau" | "rau" | "gat";
    image: {
      data: Image[];
    };
    artists: {
      data: Artist[];
    };
  };
}

export interface Image {
  id: number;
  attributes: {
    name: string;
    url: string;
  };
}
export interface Artist {
  id: number;
  attributes: {
    name: string;
    slug: string;
  };
}

export interface AlbumRespone {
  data: Album[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface AlbumListConfig {
  populate?: string;
  "pagination[page]"?: string;
  "pagination[pageSize]"?: string;
  sort?: string;
  "filters[mood][$eq]"?: string;
}
