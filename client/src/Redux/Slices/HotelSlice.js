import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    hotels:[]
 }

const Hotelslice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    Set_hotels(state,action) {
      state.hotels = action.payload
    },
    
  },
})

export const { Set_hotels } = Hotelslice.actions
export const selecthotels = (state)=> state.hotel.hotels 
export default Hotelslice.reducer