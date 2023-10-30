import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Deceased } from "../models/deceased.model";

export const deceasedApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
  reducerPath: "deceased",
  tagTypes: ["deceased"],
  endpoints: (builder) => ({
    getDeceased: builder.query<[Deceased], string>({
      query: () => "deceased",
    }),
  }),
});
export const { useGetDeceasedQuery } = deceasedApi;
