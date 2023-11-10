import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
  },
  reducers: {
    addUser: (state, action) => {
      // console.log("adduser called");
      // console.log(action.payload);
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
