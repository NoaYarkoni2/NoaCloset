import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../store/Data";
import { loadUsersFromLocalStorage } from "../store/LocalStorage";

const initialState = loadUsersFromLocalStorage() || userList;
// const initialState = userList;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      const userIdToDelete = action.payload;
      return state.filter((user) => user.id !== userIdToDelete);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
