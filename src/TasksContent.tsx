import { Task } from "./Task";
import { EmptyList } from "./EmptyList";

export function TasksContent() {
  return (
    <main className="w-full mt-16 text-white">
      <header className="flex items-start justify-between text-sm">
        <div className="flex gap-2 items-center">
          <span className="text-sky-500">To do</span>
          <div className="rounded-lg px-2 bg-gray-900 text-white font-medium">
            0
          </div>
        </div>
        <div className="flex gap-2 items-center text-sm">
          <span className="text-purple-500">Done</span>
          <div className="rounded-lg px-2 bg-gray-900 text-white font-medium">
            0
          </div>
        </div>
      </header>

      <Task />
    </main>
  );
}
