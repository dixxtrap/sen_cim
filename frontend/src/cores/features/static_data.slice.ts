import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Flower } from "../models/flower.model";

export const staticDataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
  reducerPath: "static_data",
  endpoints: (builder) => ({
    getFlower: builder.query<[Flower], string>({
      query: () => "/flower",
    }),
  }),
});

export const { useGetFlowerQuery } = staticDataApi;
