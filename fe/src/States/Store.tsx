import { configureStore } from "@reduxjs/toolkit";
import {
  REGISTER,
  REHYDRATE,
  PURGE,
  PAUSE,
  FLUSH,
  PERSIST,
  persistReducer,
} from "redux-persist";
import rootReducer from "./Global"
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PURGE, PAUSE, PERSIST],
      },
    }),
});
