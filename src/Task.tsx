import { Trash } from "phosphor-react";
import { ButtonStatus } from "./ButtonStatus";

interface Task {
  id: number;
  description: string;
  is_finished: boolean;
  updated_at: Date;
  created_at: Date;
  deleted_at: Date;
}

interface PropsTask {
  task: Task;
  onDeleteTask: (id: number) => void;
}

export function Task({
  task: { id, description, is_finished },
  onDeleteTask,
}: PropsTask) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }
  return (
    <div className="mt-6 w-full flex items-start gap-4 p-4 bg-zinc-800 border border-gray-600 border-opacity-40 text-white text-sm rounded-md">
      <ButtonStatus taskId={id} initialStatus={is_finished} />
      <p className="text-sm flex-1">{description}</p>
      <button className="p-2" onClick={handleDeleteTask}>
        <Trash size={18} />
      </button>
    </div>
  );
}
