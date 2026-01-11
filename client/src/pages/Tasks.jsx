import { useState } from "react";
import TaskCard from "../components/app/TaskCard";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Revise React fundamentals",
      description: "Go through hooks, props, and component patterns",
      tag: "Learning",
      completed: false,
    },
    {
      id: 2,
      title: "DSA practice – Arrays",
      description: "Solve 5 medium-level problems",
      tag: "Placement Prep",
      completed: false,
    },
    {
      id: 3,
      title: "Build FocusFlow task UI",
      description: "Design calm glassmorphism task cards",
      tag: "Project",
      completed: false,
    },
  ]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-slate-100">
          Tasks
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          What you plan to focus on today.
        </p>
      </div>

      {/* Task list */}
      <div className="space-y-4 max-w-2xl">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            tag={task.tag}
            completed={task.completed}
            onToggle={() => toggleTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
