import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginData } from "constants/types/auth";
import { ACCESS_TOKEN } from "constants/types/localStorage";

const _getSessionKey = () => {
  const sessionKey = localStorage.getItem(ACCESS_TOKEN);
  return sessionKey ? sessionKey : null;
};

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: _getSessionKey() != null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginData>) => {
      return state;
    },
    logout: (state) => {
      localStorage.removeItem(ACCESS_TOKEN);
      state.isLoggedIn = false;
    },
    checkSession: (state) => {
      return state;
    },
    updateState: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { login, logout, checkSession, updateState } = authSlice.actions;
export default authSlice.reducer;
