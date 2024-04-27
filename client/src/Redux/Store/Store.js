import { configureStore } from '@reduxjs/toolkit'
import hotel from '../Slices/HotelSlice'

const store = configureStore({
  reducer:{
    hotel:hotel
  }
})

export default store