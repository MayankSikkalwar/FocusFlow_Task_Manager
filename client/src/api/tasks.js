import { useAuth } from "@clerk/clerk-react";

const API_URL = import.meta.env.VITE_API_URL;

export function useTasksApi() {
  const { getToken } = useAuth();

  // Fetch all tasks
  const getTasks = async () => {
    const token = await getToken();

    const res = await fetch(`${API_URL}/tasks`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }

    return res.json();
  };

  // Create a new task
  const createTask = async (task) => {
    const token = await getToken();

    const res = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!res.ok) {
      throw new Error("Failed to create task");
    }

    return res.json();
  };

  return {
    getTasks,
    createTask,
  };
}
