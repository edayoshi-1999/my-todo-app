//Reactフックを使用するために、'use client'を指定
//今回は、trpc.tasks.getAll.useQuery();　の、useQueryを使用するために、
// 'use client'を指定
'use client';


// ui/tasksのファイル
import TaskList from "@/ui/tasks/task-list"; 
import Search from "@/ui/tasks/search";
import { SearchButton, EditButton, AddButton, DeleteButton } from "@/ui/tasks/button"; 
import StatusFilter from "@/ui/tasks/status-filter";
import SideBar from "@/ui/tasks/side-bar";

// libのファイル
import { trpc } from '@/lib/trpc';
import { Todo } from '@/lib/definitions';
import { format } from "path";


export default function Page() {
  
  const { data: tasks, isLoading } = trpc.tasks.getAll.useQuery();

  //取得したデータを整形
  // tasksはTodo[] | undefinedの型を持つので、undefinedの場合は空の配列を返す
  //tRPCによるAPIから取得した日付のデータは、string型のため、Date型に変換する必要がある
  // mapメソッドを使用して、各タスクのdeadline, updatedAt, createdAtをDate型に変換
  const formattedTasks: Todo[] = (tasks ?? []).map((task) => ({   //tasks ?? []は、 左辺が null または undefined の場合に右辺の値を返します。この場合、tasks が undefined の場合は空の配列（[]）を返し、tasks が Todo[] の場合はそのまま tasks を返します。undefined ままだと、map メソッドがエラーになる
  ...task, // task オブジェクトのすべてのプロパティを展開して新しいオブジェクトにコピーします。その後に指定されたプロパティ（deadline, updatedAt, createdAt）は、展開されたプロパティを上書きします。この方法を使うことで、元のオブジェクトを変更せずに、新しいオブジェクトを効率的に作成できます（イミュータブルな操作）。
  deadline: new Date(task.deadline), // string を Date に変換
  updatedAt: new Date(task.updatedAt), 
  createdAt: new Date(task.createdAt), 
}));


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
            <TaskList tasks={formattedTasks}/>
          </section>
        </main>
      </div>
    );
  }