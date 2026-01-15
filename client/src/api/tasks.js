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
  //update task
  const updateTask = async (id, updates) => {
    const token = await getToken();

    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });

    if (!res.ok) {
      throw new Error("Failed to update task");
    }

    return res.json();
  };
  // Delete a task
  const deleteTask = async (id) => {
    const token = await getToken();

    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to delete task");
    }
  };

  return {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
  };
}
