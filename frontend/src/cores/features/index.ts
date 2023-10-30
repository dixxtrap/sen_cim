import { configureStore } from "@reduxjs/toolkit";
import { deceasedApi } from "./deceased.slice";
import { burialApi } from "./burial.slice";
import { staticDataApi } from "./static_data.slice";
import { obituaryApi } from "./obituary";

const store = configureStore({
  reducer: {
    [deceasedApi.reducerPath]: deceasedApi.reducer,
    [burialApi.reducerPath]: burialApi.reducer,
    [staticDataApi.reducerPath]: staticDataApi.reducer,
    [obituaryApi.reducerPath]: obituaryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(deceasedApi.middleware)
      .concat(staticDataApi.middleware)
      .concat(obituaryApi.middleware)
      .concat(burialApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
