import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredhotels: [],
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    set_Search: (state, action) => {
      const { hotels, rating, roomspace, city } = action.payload;
      const searched = hotels.filter(
        (hoteldata) =>
          hoteldata.city.toLowerCase().includes(city.toLowerCase()) &&
          hoteldata.roomspace.toLowerCase().includes(roomspace.toLowerCase()) &&
          hoteldata.rating.toLowerCase().includes(rating.toLowerCase())
      );
      state.filteredhotels = searched;
    },
  },
});

export const { set_Search } = SearchSlice.actions;
export const selectfilteredhotels = (state) => state.search.filteredhotels;

export default SearchSlice.reducer;
