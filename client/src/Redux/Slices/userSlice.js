import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const Tokenslice = createSlice({
  name: "token",
  initialState,
  reducers: {
    Set_hotels(state, action) {
      state.token = action.payload;
    },
  },
});

export const { Set_token } = Tokenslice.actions;
export const selectToken = (state) => state.token.token;
export default Tokenslice.reducer;
