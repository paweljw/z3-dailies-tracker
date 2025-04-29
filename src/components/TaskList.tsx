'use client';

import { useEffect, useState } from 'react';
import { initDB, loadCompletedTasks, saveCompletedTasks } from '~/lib/indexedDB';
import ListItemLoading from './ListItemLoading';
import ListItem from './ListItem';
import type { Task } from '~/config/tasks';

export default function TaskList({
  bg,
  border,
  title,
  tableName,
  tasks,
}: {
  bg: string;
  border: string;
  title: string;
  tableName: string;
  tasks: Task[];
}) {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        await initDB();
        const savedTasks = await loadCompletedTasks(tableName);
        setCompletedTasks(savedTasks);
      } catch (error) {
        console.error('Failed to load tasks:', error);
      } finally {
        setIsLoading(false);
      }
    };

    void loadTasks();
  }, [tableName]);

  const handleTaskCompletion = async (id: number) => {
    const newCompletedTasks = completedTasks.includes(id)
      ? completedTasks.filter((taskId) => taskId !== id)
      : [...completedTasks, id];

    setCompletedTasks(newCompletedTasks);

    try {
      await saveCompletedTasks(tableName, newCompletedTasks);
    } catch (error) {
      console.error('Failed to save tasks:', error);
    }
  };

  const handleReset = async () => {
    setCompletedTasks([]);
    try {
      await saveCompletedTasks(tableName, []);
    } catch (error) {
      console.error('Failed to reset tasks:', error);
    }
  };

  return (
    <div className={`flex flex-col rounded-lg border-1 ${border} flex-1`}>
      <div className={`flex items-center justify-between ${bg} rounded-t-lg p-2`}>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <button
          onClick={handleReset}
          className="rounded-full bg-white/20 px-3 py-1 text-sm text-white transition-colors hover:bg-white/30"
        >
          Reset
        </button>
      </div>
      {isLoading ? (
        <>
          <ListItemLoading border={border} />
          <ListItemLoading border={border} />
          <ListItemLoading border={border} />
        </>
      ) : tasks.length > 0 ? (
        tasks
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((task) => (
            <ListItem
              key={task.id}
              task={task}
              border={border}
              bg={bg}
              completed={completedTasks.includes(task.id)}
              callback={handleTaskCompletion}
            />
          ))
      ) : (
        <div className="p-4 text-center text-gray-400">Coming soon</div>
      )}
    </div>
  );
}
