export interface ResponseApi<Data> {
  data: Data[] | Data;
  meta: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
  };
}
