import React from "react";
import NewTask from "./NewTask";
const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700">Tasks</h2>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any task
        </p>
      )}

      <NewTask onAddTask={onAddTask} />
      {tasks.length > 0 && (
        <ul className="mt-8 p-4 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={Date.now()} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => {
                  onDeleteTask(task.id);
                }}
                className="text-stone-700 hover:text-red-500"
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
