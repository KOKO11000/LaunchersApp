import { create } from "zustand";

const BASE_PATH = "http://localhost:5000/api";

export const UseLauncher = create((set) => ({
  launchers: [],
  launcherFetch: async () => {
    try {
      const res = await fetch(`${BASE_PATH}/launchers`, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const data = await res.json();
       set({launchers:data})
    } catch (error) {
      console.error(error.message);
    }
  },
}));
