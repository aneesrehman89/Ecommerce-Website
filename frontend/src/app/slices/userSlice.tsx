import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios, { type AxiosError } from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

interface UserInfo {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface UserState {
  userInfo: UserInfo | null;
  loading: boolean;
  error: string | null;
}

interface AuthData {
  name?: string;
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

// Register user
export const registerUser = createAsyncThunk<
  UserInfo,
  AuthData,
  { rejectValue: string }
>(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post<UserInfo>(`${API_URL}/register`, data);
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      return res.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      return rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  }
);

// Login user
export const loginUser = createAsyncThunk<
  UserInfo,
  AuthData,
  { rejectValue: string }
>(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post<UserInfo>(`${API_URL}/login`, data);
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      return res.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const initialState: UserState = {
  userInfo: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
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
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserInfo>) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Login failed. Please try again.";
      })

      // Register cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<UserInfo>) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload as string || "Registration failed. Please try again.";
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
