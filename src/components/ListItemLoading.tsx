export default function ListItemLoading({ border }: { border: string }) {
    return (
        <div className={`p-4 border-b-1 ${border} items-center gap-4 flex flex-row relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-sheen" />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 overflow-hidden`}>

            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="h-6 bg-gray-700 rounded w-3/4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-sheen" />
                </div>
                <div className="h-4 bg-gray-700 rounded w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-sheen" />
                </div>
            </div>
        </div>
    )
}