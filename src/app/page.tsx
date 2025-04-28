import Notice from '~/components/Notice';
import TaskList from '~/components/TaskList';
import { dailyTasks, weeklyTasks, longTermTasks } from '~/config/tasks';

export default function HomePage() {
  return (
    <main className="flex flex-grow flex-col gap-8 bg-zinc-800 p-8 text-white">
      <Notice />
      <div className="flex flex-grow flex-col gap-12 lg:flex-row">
        <TaskList bg="bg-teal-700" border="border-teal-700" title="Dailies" tableName="dailies" tasks={dailyTasks} />
        <TaskList
          bg="bg-yellow-700"
          border="border-yellow-700"
          title="Weeklies"
          tableName="weeklies"
          tasks={weeklyTasks}
        />
        <TaskList
          bg="bg-pink-700"
          border="border-pink-700"
          title="Long Term"
          tableName="long-term"
          tasks={longTermTasks}
        />
      </div>
    </main>
  );
}
