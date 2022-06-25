import { CreateTask } from "./CreateTask";
import { TasksContent } from "./TasksContent";

export function Container() {
  return (
    <div className="w-full max-w-3xl">
      <CreateTask />
      <TasksContent />
    </div>
  );
}
