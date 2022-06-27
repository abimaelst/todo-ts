import { Task } from "./Task";
import { EmptyList } from "./EmptyList";
import { useEffect, useState } from "react";

interface Task {
  id: number;
  description: string;
  is_finished: boolean;
  updated_at: Date;
  created_at: Date;
  deleted_at: Date;
}

interface TasksContentProps {
  tasks: Task[];
  tasksToDo: number;
  tasksFinished: number;
  onDeleteTask: (id: number) => void;
}

export function TasksContent({
  tasks,
  tasksToDo,
  tasksFinished,
  onDeleteTask,
}: TasksContentProps) {
  function handleDeleteTask(id: number) {
    onDeleteTask(id);
  }

  return (
    <main className="w-full mt-16 text-white">
      <header className="flex items-start justify-between text-sm">
        <div className="flex gap-2 items-center">
          <span className="text-sky-500">To do</span>
          <div className="rounded-lg px-2 bg-gray-900 text-white font-medium">
            {tasksToDo}
          </div>
        </div>
        <div className="flex gap-2 items-center text-sm">
          <span className="text-purple-500">Done</span>
          <div className="rounded-lg px-2 bg-gray-900 text-white font-medium">
            {tasksFinished}
          </div>
        </div>
      </header>
      {tasks.length ? (
        tasks.map((task) => {
          return (
            <Task key={task.id} task={task} onDeleteTask={handleDeleteTask} />
          );
        })
      ) : (
        <EmptyList />
      )}
    </main>
  );
}
