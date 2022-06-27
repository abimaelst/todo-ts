import { Check } from "phosphor-react";
import { useEffect, useState } from "react";

interface ButtonStatusProps {
  taskId: number;
  initialStatus: boolean;
}

export function ButtonStatus({ taskId, initialStatus }: ButtonStatusProps) {
  const [statusTask, setStatusTask] = useState(false);

  useEffect(() => {
    setStatusTask(() => {
      return initialStatus;
    });
  }, []);

  function handleChangeStatus() {
    fetch(`http://todo-back.test/api/tasks/${taskId}`, {
      method: "put",
    }).then(() => {
      setStatusTask((state) => {
        return !state;
      });
    });
  }
  return (
    <button
      className={`w-5 h-5  rounded-full flex items-center justify-center ${
        statusTask ? "bg-purple-500" : "border-2 bg-transparent border-sky-400"
      }`}
      onClick={handleChangeStatus}
    >
      {statusTask ? <Check size={18} /> : ""}
    </button>
  );
}
