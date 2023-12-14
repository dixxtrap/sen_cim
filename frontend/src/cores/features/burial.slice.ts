import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Burial, BurialSearch } from "../models/burial.model";
import { PaginationDto } from "../models/pagination.model";
import { Wish } from "../models/wish.model";
import { GatewayResponse } from "../models/gateway_response";
import { SharedFlowerCreate } from "../models/shared_flower";
import { PaginatedData } from "../models/paginated_data";
import { PaginationResult } from "../models/pagination";

export const burialApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
  reducerPath: "burial",
  tagTypes: ["burial"],
  endpoints: (builder) => ({
    searchBurial: builder.mutation<
      [Burial],
      { pagination: PaginationDto; burial: BurialSearch }
    >({
      query: ({ pagination, burial }) => ({
        url: `burial/search?page=${pagination.page ?? 0}&perPage=${
          pagination.perPage ?? 20
        }&fromDate=${"0000"}`,
        body: burial,
        method: "POST",
      }),
      invalidatesTags: ["burial"],
    }),
    getBurialById: builder.query<Burial, string>({
      query: (id) => `burial/${id}`,
      providesTags: ["burial"],
    }),
    getWishes: builder.query<PaginatedData<Wish>, PaginationDto>({
      query: (pagination) =>
        `wish?page=${pagination.page}&perPage=${
          pagination.perPage ?? 20
        }&fromDate=0000`,
      providesTags: ["burial"],
    }),
    addWish: builder.mutation<GatewayResponse, Wish>({
      query: (wish) => ({
        url: "wish",
        body: wish,
        method: "POST",
      }),
      invalidatesTags: ["burial"],
    }),
    addSharedFlower: builder.mutation<GatewayResponse, SharedFlowerCreate>({
      query: (wish) => ({
        url: "shared_flower",
        body: wish,
        method: "POST",
      }),
      invalidatesTags: ["burial"],
    }),
  }),
});

export const {
  useSearchBurialMutation,
  useGetBurialByIdQuery,
  useAddWishMutation,
  useAddSharedFlowerMutation,
  useGetWishesQuery,
} = burialApi;
