// ui/tasksのファイル
import TaskList from "@/ui/tasks/task-list"; 
import Search from "@/ui/tasks/search";
import { SearchButton, EditButton, AddButton, DeleteButton } from "@/ui/tasks/button"; 
import StatusFilter from "@/ui/tasks/status-filter";
import SideBar from "@/ui/tasks/side-bar";

// libのファイル


export default function Page() {
  return (
    //一番上に、検索画面
    //その下に、タスクの絞り込みフィルターと、追加ボタン
    //その下に、タスクの一覧表示
    //左に、サイドバー 
    <div className="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Search />
        <div className="flex justify-between items-center p-4">
          <StatusFilter />
          <AddButton />
        </div>
        <TaskList />
      </div>
    </div>

  );
}