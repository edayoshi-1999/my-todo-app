
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
    <button type="button" className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
      タスクの追加
    </button>
  );
}

// 編集ボタン
export function EditButton() {
  return (
    <button type="button" className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">
      <span>編集</span>
    </button>
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