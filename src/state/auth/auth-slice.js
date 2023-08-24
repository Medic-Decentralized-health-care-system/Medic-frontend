// store/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  walletAddress: "",
  balance: "",
  toShare: false,
  doctor: {},
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
    setToShare: (state, action) => {
      state.toShare = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setDoctor: (state, action) => {
      state.doctor = action.payload;
    },
  },
  extraReducers: {},
});

export const { setUser, setLoading, setWalletAddress, setBalance, setDoctor } =
  authSlice.actions;
export default authSlice.reducer;
