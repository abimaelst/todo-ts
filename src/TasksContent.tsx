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

export function TasksContent() {
  const [tasks, setTasks] = useState([] as Task[]);
  const [tasksToDo, setTasksToDo] = useState(0);
  const [tasksFinished, setTasksFinished] = useState(0);
  useEffect(() => {
    fetch(`http://todo-back.test/api/tasks`)
      .then((response) => response.json())
      .then((res) => setTasks([...res.data]));
  }, []);
  useEffect(() => {
    const taskStatus = tasks.reduce(
      (acc, curr: Task) => {
        if (!curr.is_finished) {
          acc.todo += 1;
          return acc;
        }

        if (curr.is_finished) {
          acc.finished += 1;
          return acc;
        }

        return acc;
      },
      { todo: 0, finished: 0 }
    );
    setTasksToDo(() => {
      return taskStatus.todo;
    });
    setTasksFinished(() => {
      return taskStatus.finished;
    });
  }, [tasks]);
  async function handleDeleteTask(id: number) {
    await fetch(`http://todo-back.test/api/tasks/${id}`, {
      method: "delete",
    });
    setTasks((state) => {
      return state.filter((task) => task.id !== id);
    });
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
          return <Task key={task.id} task={task} onDelete={handleDeleteTask} />;
        })
      ) : (
        <EmptyList />
      )}
    </main>
  );
}
