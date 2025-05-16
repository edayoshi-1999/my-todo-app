//タグの表示
//今あるタグを表示する。それでも絞り込みができるように。

export default function SideBar() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">タスクのタグ一覧</h2>
            <ul className="space-y-2">
                <li className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                    タグ1
                </li>
                <li className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                    タグ2
                </li>
                <li className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                    タグ3
                </li>
            </ul>
        </div>
    );
}