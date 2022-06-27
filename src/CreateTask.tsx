import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
export function CreateTask() {
  const [taskDescription, setTaskDescription] = useState("");
  function handleCreateTask() {
    console.log("hi there", taskDescription);
    fetch("http://todo-back.test/api/tasks", {
      method: "post",
      body: JSON.stringify({
        description: taskDescription,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    setTaskDescription("");
  }
  function handleInputDescription(e: ChangeEvent<HTMLInputElement>) {
    setTaskDescription(e.target.value);
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
