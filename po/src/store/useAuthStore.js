import create from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  user: null,
  error: null,
  login: async (userName, password) => {
    try {
      const response = await axios.post("api link", {
        userName,
        password,
      });
      set({ user: response.data.user, error: null });
    } catch (error) {
      set({ error: error.response.data.message });
    }
  },
  logout: () => set({ user: null, error: null }),
}));

export default useAuthStore;
