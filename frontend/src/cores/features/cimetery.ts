
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { Cimetery } from "../models/cimetery.model";

export const cimeteryApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
  reducerPath: "cimetery",
  tagTypes: ["cimetery"],
  endpoints: (builder) => ({
    getCimetery: builder.query<[Cimetery], string>({
      query: () => "cimetery",
    }),
  }),
});

export const {useGetCimeteryQuery} = cimeteryApi