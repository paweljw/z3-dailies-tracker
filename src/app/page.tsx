import Notice from "~/components/Notice";
import TaskList from "~/components/TaskList";
import { dailyTasks, weeklyTasks, longTermTasks } from "~/config/tasks";

export default function HomePage() {
  return (
    <main className="flex flex-grow flex-col p-8 gap-8 bg-zinc-800 text-white">
      <Notice />
      <div className="flex flex-col lg:flex-row flex-grow gap-12">
        <TaskList bg="bg-teal-700" border="border-teal-700" title="Dailies" tableName="dailies" tasks={dailyTasks} />
        <TaskList bg="bg-yellow-700" border="border-yellow-700" title="Weeklies" tableName="weeklies" tasks={weeklyTasks} />
        <TaskList bg="bg-pink-700" border="border-pink-700" title="Long Term" tableName="long-term" tasks={longTermTasks} />
      </div>
    </main>
  );
}
