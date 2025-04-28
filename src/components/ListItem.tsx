"use client";
import type { DailyTask } from "~/config/dailies";

export default function ListItem({ task, accent, completed, callback }: { task: DailyTask, accent: string, completed: boolean, callback: (id: number) => void }) {

    const handleClick = () => {
        callback(task.id);
    }

    const incompleteStyle = `bg-gray-700 text-gray-400`;
    const completedStyle = `bg-${accent}-700 text-white`;

    return (
        <div key={task.name} className={`p-4 border-b-1 border-${accent}-700 items-center gap-4 flex flex-row cursor-pointer ${completed ? 'text-gray-400' : 'text-white'}`} onClick={handleClick}>
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