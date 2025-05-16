import Link from 'next/link';


//タスクの検索ボタン
export function SearchButton() {
  return (
    <button type="button" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
      <span>検索</span>
    </button>
  );
}



// タスクの追加ボタン
export function AddButton() {
  return (
    <Link
      href="/task/new" // タスクの追加画面へのリンク
      className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 inline-block text-center"
    >
      タスクの追加
    </Link>
  );
}

// 編集ボタン
export function EditButton({ taskId }: { taskId: number }) {
  return (
    <Link
      href={`/task/${taskId}/edit`}
      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      編集
    </Link>
  );
}

// 削除ボタン
export function DeleteButton() {
  return (
    <button type="button" className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
      <span>削除</span>
    </button>
  );
}