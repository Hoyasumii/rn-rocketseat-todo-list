import { Task } from "@/types";
import { create } from "zustand";

type Tasks = {
  tasks: Array<Task>;
  append(data: Omit<Task, "id">): void;
  remove(id: string): void;
  onlyFinished(): Array<Task> | null;
};

export default create<Tasks>()((set) => ({
  tasks: [],
  append(data) {
    set((prev) => ({
      tasks: [...prev.tasks, { id: crypto.randomUUID(), ...data }],
    }));
  },
  remove(id) {
    if (!this.tasks.find((item) => item.id === id))
      throw new Error("Invalid Item");

    set((prev) => ({
      tasks: [...prev.tasks.filter((item) => item.id !== id)],
    }));
  },
  onlyFinished() {
    return this.tasks;
  },
}));
