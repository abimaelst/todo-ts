import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
interface CreateTaskProps {
  onCreateTask: (description: string) => void;
}
export function CreateTask({ onCreateTask }: CreateTaskProps) {
  const [taskDescription, setTaskDescription] = useState("");

  function handleInputDescription(e: ChangeEvent<HTMLInputElement>) {
    setTaskDescription(e.target.value);
  }

  function handleCreateTask() {
    onCreateTask(taskDescription);
    setTaskDescription("");
  }

  return (
    <div className="w-full flex gap-2 -mt-7">
      <input
        className="w-full text-white rounded-md bg-zinc-800 border border-zinc-900 px-4 placeholder-gray-500 outline-none focus:border-sky-700 "
        type="text"
        placeholder="Add a new task"
        value={taskDescription}
        onInput={handleInputDescription}
      />
      <button
        className="flex gap-2 items-center text-sm capitalize font-bold text-white bg-sky-700 p-4 rounded-md"
        onClick={handleCreateTask}
      >
        add
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
