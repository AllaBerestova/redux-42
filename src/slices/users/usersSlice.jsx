import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.isLoading = false; 
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
     setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false; 
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser, setUsers, setLoading, setError } = usersSlice.actions;

export default usersSlice.reducer;
