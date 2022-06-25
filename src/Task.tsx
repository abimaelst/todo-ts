import { Trash } from "phosphor-react";
import { ButtonTodo } from "./ButtonTodo";

export function Task() {
  return (
    <div className="mt-6 w-full flex items-start gap-4 p-4 bg-zinc-800 border border-gray-600 border-opacity-40 text-white text-sm rounded-md">
      <ButtonTodo />
      <p className="text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
        cupiditate tempore, nihil sed voluptatum illum ad veniam natus odio,
        commodi ipsam officia exercitationem, dignissimos excepturi explicabo
      </p>
      <button className="p-2">
        <Trash size={18} />
      </button>
    </div>
  );
}
