
//検索入力フォーム


export default function Search() {
    return (
        <div className="flex flex-col gap-4">
        <label htmlFor="search" className="text-sm font-medium text-gray-700">
            タスクを検索
        </label>
        <input
            type="text"
            id="search"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="タスク名を入力"
        />
        </div>
    );
}