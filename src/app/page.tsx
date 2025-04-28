import Notice from "~/components/Notice";
import Dailies from "~/components/Dailies";
import Weeklies from "~/components/Weeklies";
import LongTerm from "~/components/LongTerm";
export default function HomePage() {
  return (
    <main className="flex flex-grow flex-col p-8 bg-zinc-800 text-white">
      <Notice />
      <div className="flex flex-col lg:flex-row flex-grow gap-12">
        <Dailies />
        <Weeklies />
        <LongTerm />
      </div>
    </main>
  );
}
