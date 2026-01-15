import { useEffect, useState } from "react";
import TaskCard from "../components/app/TaskCard";
import { useTasksApi } from "../api/tasks";

export default function Tasks() {
  const { getTasks } = useTasksApi();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchTasks() {
      try {
        const data = await getTasks();
        if (isMounted) {
          setTasks(data);
        }
      } catch {
        if (isMounted) {
          setError("Unable to load tasks");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchTasks();

    return () => {
      isMounted = false;
    };
  }, [getTasks]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto text-slate-400">
        Loading tasks…
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-slate-100">
          Tasks
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          What you plan to focus on today.
        </p>
      </div>

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
              description={task.description}
              tag={task.tag}
              completed={task.completed}
              onToggle={() => {}}
            />
          ))
        )}
      </div>
    </div>
  );
}
