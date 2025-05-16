//タグの表示
//今あるタグを表示する。それでも絞り込みができるように。

export default function SideBar({ tags }: { tags: string[] }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">タスクのタグ一覧</h2>
            <ul className="space-y-2">
                {tags.map((tag) => (
                    <li key={tag} className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
}