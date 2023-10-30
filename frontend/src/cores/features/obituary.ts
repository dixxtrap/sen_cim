import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Obituary } from "../models/obituary";

export const obituaryApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
  reducerPath: "obituary",
  tagTypes: ["obituary"],
  endpoints: (builder) => ({
    getObituary: builder.query<[Obituary], string>({
      query: () => "obituary",
    }),
  }),
});

export const {useGetObituaryQuery}=obituaryApi