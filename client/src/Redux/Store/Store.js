import { combineReducers, configureStore } from '@reduxjs/toolkit'
import hotel from '../Slices/HotelSlice'
import search from '../Slices/SearchSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
      hotel,
      search
  })
)
const store =  configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
 
 
export const persistor = persistStore(store)

export {store}

