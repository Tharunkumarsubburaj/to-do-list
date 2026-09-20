import { apiRequest } from ".";

export const taskAPI = {
  create: async (taskData) =>
    await apiRequest("/tasks", {
      method: "POST",
      body: taskData,
    }),

  getAll: async () => await apiRequest("/tasks"),
};
