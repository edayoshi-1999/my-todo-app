// ui/tasksのファイル
import TaskList from "@/ui/tasks/task-list"; 
import Search from "@/ui/tasks/search";
import { SearchButton, EditButton, AddButton, DeleteButton } from "@/ui/tasks/button"; 
import StatusFilter from "@/ui/tasks/status-filter";
import SideBar from "@/ui/tasks/side-bar";

// libのファイル


export default function Page() {
 return (
    <div className="flex min-h-screen bg-gray-100">
      {/* サイドバー */}
      <aside className="w-1/4 bg-white shadow-md p-4">
        <SideBar />
      </aside>

      {/* メインコンテンツ */}
      <main className="flex flex-col w-3/4 p-6 space-y-6">
        {/* 検索バー */}
        <section className="bg-white shadow-md rounded-lg p-4">
          <Search />
        </section>

        {/* フィルターと追加ボタン */}
        <section className="flex justify-between items-center bg-white shadow-md rounded-lg p-4">
          <StatusFilter />
          <AddButton />
        </section>

        {/* タスクリスト */}
        <section className="bg-white shadow-md rounded-lg p-4 flex-1 overflow-y-auto">
          <TaskList />
        </section>
      </main>
    </div>
  );
}