import { create } from "zustand";
import { User } from "../../models/user";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  users: User[];
  add: (user: User) => void;
}

export const useHistoricUser = create(
  persist<Props>(
    (set, get) => ({
      users: [],
      add: (user: User) => {
        const old = get().users;
        const data = old.find((u) => u.id === user.id);
        if (data) {
          return;
        }
        set((state) => ({ users: [...state.users, user] }));
      },
    }),
    {
      name: "historic-user",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
