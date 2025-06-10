import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "Users",
  initialState: {
    users: [],
    loading: "loading",
    error: null
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.loading = 'succeeded'; 
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
     setError: (state, action) => {
      state.error = action.payload;
      state.loading = 'failed'; 
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser, setUsers, setLoading, setError } = usersSlice.actions;

export default usersSlice.reducer;
