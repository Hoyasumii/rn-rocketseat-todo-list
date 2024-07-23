import { Task } from "@/types";
import { create } from "zustand";

type Tasks = {
  tasks: Array<Task>;
  append(data: Omit<Task, "id">): void;
  remove(id: string): void;
  onlyFinished(): Array<Task> | null;
  totalCount: number;
  finishedCount: number;
  show: "total" | "finished";
  setShow(target: "total" | "finished"): void;
};

export default create<Tasks>()((set) => ({
  tasks: [],
  append(data) {
    set((prev) => ({
      tasks: [...prev.tasks, { id: crypto.randomUUID(), ...data }],
      totalCount: prev.tasks.length,
      finishedCount: prev.tasks.filter((item) => item.finished).length,
    }));
  },
  remove(id) {
    if (!this.tasks.find((item) => item.id === id))
      throw new Error("Invalid Item");

    set((prev) => ({
      tasks: [...prev.tasks.filter((item) => item.id !== id)],
      totalCount: prev.tasks.length,
      finishedCount: prev.tasks.filter((item) => item.finished).length,
    }));
  },
  onlyFinished() {
    return this.tasks;
  },
  totalCount: 0,
  finishedCount: 0,
  show: "total",
  setShow(target) {
    set(() => ({ show: target }));
  },
}));
