import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./ProductRedux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserRedux from "./UserRedux";
import ReportRedux from "./ReportRedux";
import DetailReport from "./DetailReport";

const persistConfig = {
  key: "root",
  version: 2,
  storage,
};

const rootReducer = combineReducers({
  products: ProductReducer,
  user: UserRedux,
  report: ReportRedux,
  detailReport: DetailReport,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
