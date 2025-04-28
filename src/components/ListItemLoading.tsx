export default function ListItemLoading({ border }: { border: string }) {
  return (
    <div className={`border-b-1 p-4 ${border} relative flex flex-row items-center gap-4 overflow-hidden`}>
      <div className="animate-sheen absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      <div className={`flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-700`}></div>
      <div className="flex w-full flex-col gap-2">
        <div className="relative h-6 w-3/4 overflow-hidden rounded bg-gray-700">
          <div className="animate-sheen absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        </div>
        <div className="relative h-4 w-1/2 overflow-hidden rounded bg-gray-700">
          <div className="animate-sheen absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        </div>
      </div>
    </div>
  );
}
