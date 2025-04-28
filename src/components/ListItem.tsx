"use client";

import type { Task } from "~/config/tasks";

export default function ListItem({ task, bg, border, completed, callback }: { task: Task, bg: string, border: string, completed: boolean, callback: (id: number) => void }) {
    const handleClick = () => {
        callback(task.id);
    }

    const incompleteStyle = `bg-gray-700 text-gray-400`;
    const completedStyle = `${bg} text-white`;

    return (
        <div key={task.id} className={`p-4 border-b-1 ${border} items-center gap-4 flex flex-row cursor-pointer ${completed ? 'text-gray-400' : 'text-white'}`} onClick={handleClick}>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${completed ? completedStyle : incompleteStyle}`}>
                ✔︎
            </div>
            <div className="flex flex-col">
                <p className="text-lg font-bold">{task.name}</p>
                <p className="text-sm">{task.description}</p>
            </div>
        </div>
    )
}