//タスクの絞り込みフィルター
//完了か、着手中か、未完了かをプルダウンで選択して絞り込む


export default function StatusFilter() {  
    return (
        <div>
            <label htmlFor="filter">
                タスクの絞り込み
            </label>
            <select>
                <option value="">すべて</option>
                <option value="completed">完了</option>
                <option value="in-progress">着手中</option>
                <option value="not-started">未着手</option>
            </select>
        </div>
    );
}