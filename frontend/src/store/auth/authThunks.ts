import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload: {
    email: string;
    full_name: string;
    password: string;
    password2: string;
  }) => {
    const res = await api.post("/api/auth/register", payload);
    return res.data;
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    const res = await api.post("/api/auth/login", credentials);

    const { access, refresh } = res.data;

    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);

    return res.data;
  }
);

export const fetchMe = createAsyncThunk("auth/current-user", async () => {
  const res = await api.get("/api/auth/current-user");
  return res.data;
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  const refresh = localStorage.getItem("refreshToken");
  if (refresh) {
    await api.post("/api/auth/logout", { refresh });
  }

  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
});
