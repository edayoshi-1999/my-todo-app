// タスクの絞り込みフィルター
// 完了か、着手中か、未完了かをプルダウンで選択して絞り込む
import type { TaskStatus } from "@/lib/definitions";


export default function StatusFilter({
  onChange,
}: {
  onChange: (value: TaskStatus | undefined) => void;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="filter" className="text-sm font-medium text-gray-700">
        タスクの絞り込み
      </label>
      <select
        id="filter"
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => {
          const value = e.target.value;
          onChange(
            value === ""
              ? undefined
              : (value as TaskStatus)
          );
        }}
      >
        <option value="">すべて</option>
        <option value="NOT_STARTED">未着手</option>
        <option value="IN_PROGRESS">着手中</option>
        <option value="COMPLETED">完了</option>
      </select>
    </div>
  );
}