import { useEffect, useState } from "react";
import { CreateTask } from "./CreateTask";
import { TasksContent } from "./TasksContent";
interface Task {
  id: number;
  description: string;
  is_finished: boolean;
  updated_at: Date;
  created_at: Date;
  deleted_at: Date;
}

export function Container() {
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

  function handleCreateTask(description: string) {
    fetch("http://todo-back.test/api/tasks", {
      method: "post",
      body: JSON.stringify({
        description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        setTasks((state) => {
          return [...state, res];
        })
      );
  }
  return (
    <div className="w-full max-w-3xl">
      <CreateTask onCreateTask={handleCreateTask} />
      <TasksContent
        tasks={tasks}
        tasksToDo={tasksToDo}
        tasksFinished={tasksFinished}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
