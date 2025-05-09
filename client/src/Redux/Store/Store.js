import { combineReducers, configureStore } from "@reduxjs/toolkit";
import hotel from "../Slices/HotelSlice";
import search from "../Slices/SearchSlice";
import token from "../Slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    hotel,
    search,
    token,
  })
);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export { store };
