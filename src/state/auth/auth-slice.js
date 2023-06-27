// store/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  walletAddress: "",
  balance: "",
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setWalletAddress: (state, action) => {
      state.balance = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
  extraReducers: {},
});

export const { setUser, setLoading, setWalletAddress, setBalance } =
  authSlice.actions;
export default authSlice.reducer;
