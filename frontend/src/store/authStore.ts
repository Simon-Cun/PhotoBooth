import { create } from "zustand";

interface User {
  id: number;
  username: string;
  email: string;
  display_name: string;
  bio: string;
  profile_picture: string | null;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: localStorage.getItem("access_token"),
  setAuth: (user, token) => {
    localStorage.setItem("access_token", token);
    set({ user, accessToken: token });
  },
  logout: () => {
    localStorage.removeItem("access_token");
    set({ user: null, accessToken: null });
  },
}));
