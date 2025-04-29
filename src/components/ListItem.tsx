'use client';

import type { Task } from '~/config/tasks';

export default function ListItem({
  task,
  bg,
  border,
  completed,
  callback,
}: {
  task: Task;
  bg: string;
  border: string;
  completed: boolean;
  callback: (id: number) => void;
}) {
  const handleClick = () => {
    callback(task.id);
  };

  const incompleteStyle = `bg-gray-700 text-gray-400`;
  const completedStyle = `${bg} text-white`;

  return (
    <div
      key={task.id}
      className={`border-b-1 p-4 ${border} flex cursor-pointer flex-row items-center gap-4 transition-colors duration-300 ${completed ? 'text-gray-400' : 'text-white'}`}
      onClick={handleClick}
    >
      <div
        className={`flex h-8 min-h-8 w-8 min-w-8 items-center justify-center rounded-full transition-colors duration-300 ${completed ? completedStyle : incompleteStyle}`}
      >
        <p className="pt-[2px] text-center text-lg">✔︎</p>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-bold">{task.name}</p>
        <p className="text-sm">{task.description}</p>
      </div>
    </div>
  );
}
