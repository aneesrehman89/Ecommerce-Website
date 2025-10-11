import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

// Register user
export const registerUser = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/register`, data);
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Login user
export const loginUser = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/login`, data);
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { userInfo: null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed. Please try again.";
      })

      // Register cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Registration failed. Please try again.";
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
