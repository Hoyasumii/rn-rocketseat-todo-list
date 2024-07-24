import { Task } from "@/types";
import uuid from "react-native-uuid";
import { create } from "zustand";

type Tasks = {
  tasks: Array<Task>;
  append(data: Omit<Task, "id" | "finished">): void;
  change(id: string): void;
  remove(id: string): void;
  onlyFinished: Array<Task>;
  show: "total" | "finished";
  setShow(target: "total" | "finished"): void;
};

export default create<Tasks>()((set) => ({
  tasks: [],
  append(data) {
    set((prev) => ({
      tasks: [
        ...prev.tasks,
        { id: uuid.v4().toString(), finished: false, ...data },
      ],
      onlyFinished: prev.tasks.filter((task) => task.finished),
    }));
  },
  change(id) {
    set((prev) => {
      const tasks = prev.tasks.map((task) =>
        task.id === id ? { ...task, finished: !task.finished } : task
      );
      const onlyFinished = tasks.filter((task) => task.finished);

      return { tasks, onlyFinished };
    });
  },
  remove(id) {
    set((prev) => {
      const tasks = prev.tasks.filter((task) => task.id !== id);
      const onlyFinished = tasks.filter((task) => task.finished);

      return { tasks, onlyFinished };
    });
  },
  onlyFinished: [],
  show: "total",
  setShow(target) {
    set(() => ({ show: target }));
  },
}));
