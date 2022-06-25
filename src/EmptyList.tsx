import Clipboard from "./assets/img/Clipboard.svg";

export function EmptyList() {
  return (
    <div className="mt-6 border-t border-gray-400 border-opacity-20 rounded-md h-72 flex flex-col gap-2 items-center justify-center">
      <img src={Clipboard} alt="clipboard image indicate todo list is empty" />
      <div className="text-sm flex flex-col items-center justify-center ">
        <span className="font-bold text-white text-opacity-50">
          You don't have any task yet.
        </span>
        <span className="text-gray-400 text-opacity-40">
          Create new tasks and organize your daily routine.
        </span>
      </div>
    </div>
  );
}
