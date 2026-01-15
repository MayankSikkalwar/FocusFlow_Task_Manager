import { useEffect, useState } from "react";
import TaskCard from "../components/app/TaskCard";
import { useTasksApi } from "../api/tasks";

export default function Tasks() {
  const { getTasks, createTask } = useTasksApi();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchTasks() {
      try {
        const data = await getTasks();
        if (isMounted) setTasks(data);
      } catch {
        if (isMounted) setError("Unable to load tasks");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchTasks();

    return () => {
      isMounted = false;
    };
  }, [getTasks]);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    // Optimistic task
    const optimisticTask = {
      _id: Date.now().toString(),
      title,
      completed: false,
    };

    setTasks((prev) => [optimisticTask, ...prev]);
    setTitle("");

    try {
      const savedTask = await createTask({
        title,
        description: "",
        tag: "general",
      });

      // Replace optimistic task with real one
      setTasks((prev) =>
        prev.map((t) => (t._id === optimisticTask._id ? savedTask : t))
      );
    } catch {
      // Rollback
      setTasks((prev) => prev.filter((t) => t._id !== optimisticTask._id));
      alert("Failed to create task");
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto text-slate-400">Loading tasks…</div>
    );
  }

  if (error) {
    return <div className="max-w-3xl mx-auto text-red-400">{error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-slate-100">Tasks</h1>
        <p className="text-slate-400 text-sm mt-1">
          What you plan to focus on today.
        </p>
      </div>

      {/* Create Task */}
      <form onSubmit={handleCreateTask} className="mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task and press Enter"
          className="
            w-full
            bg-white/5
            border border-white/10
            rounded-lg
            px-4 py-3
            text-slate-100
            placeholder:text-slate-500
            focus:outline-none
            focus:border-indigo-500/60
          "
        />
      </form>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-slate-400 text-sm">
            No tasks yet. Add your first one.
          </p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              title={task.title}
              completed={task.completed}
              onToggle={() => {}}
            />
          ))
        )}
      </div>
    </div>
  );
}
