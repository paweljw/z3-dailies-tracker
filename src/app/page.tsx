import Notice from "~/components/Notice";

export default function HomePage() {
  return (
    <main className="flex flex-grow flex-col p-8 bg-zinc-800 text-white">
      <Notice />
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      </div>
    </main>
  );
}
