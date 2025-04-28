"use client";

import { dailyTasks } from "~/config/dailies";
import ListItem from "~/components/ListItem";
import { useState } from "react";
export default function Dailies() {
    const [completedTasks, setCompletedTasks] = useState<number[]>([]);

    const handleTaskCompletion = (id: number) => {
        if (completedTasks.includes(id)) {
            setCompletedTasks(completedTasks.filter((taskId) => taskId !== id));
        } else {
            setCompletedTasks([...completedTasks, id]);
        }
    }

    return (
        <div className="flex flex-col rounded-lg border-1 border-teal-700 flex-1">
            <h1 className="text-2xl font-bold text-white bg-teal-700 rounded-t-lg p-2">Dailies</h1>
            {dailyTasks.map((task) => (
                <ListItem key={task.id} task={task} accent="teal" completed={completedTasks.includes(task.id)} callback={handleTaskCompletion} />
            ))}
        </div>
    );
}