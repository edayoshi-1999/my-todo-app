import { useState } from 'react';
import type { TaskStatus } from '@/lib/definitions';

interface EditFormProps {
  initialValues?: {
    title: string;
    description?: string;
    status: TaskStatus;
    deadline: string;
    tag?: string;
    userId: number;
  };
  onSubmit: (data: {
    title: string;
    description: string;
    status: TaskStatus;
    deadline: string;
    tag: string;
    userId: number;
  }) => void;
   editableFields?: string[];
}

export const EditForm: React.FC<EditFormProps> = ({ 
        initialValues,
        onSubmit,
        editableFields = ['description', 'status', 'deadline', 'tag'], // 編集可能なフィールドのデフォルト値
    }) => {

  // 初期値を設定(渡された値を優先し、なければ空文字列やデフォルト値を使用)
  const [title, setTitle] = useState(initialValues?.title ?? '');
  const [description, setDescription] = useState(initialValues?.description ?? '');
  const [status, setStatus] = useState<TaskStatus>(initialValues?.status ?? 'NOT_STARTED');
  const [deadline, setDeadline] = useState(initialValues?.deadline ?? '');
  const [tag, setTag] = useState(initialValues?.tag ?? '');
  const [userId] = useState(initialValues?.userId ?? 1);

  // フォームの送信処理
  // onSubmit関数を呼び出し、フォームのデータを渡す
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      status,
      deadline,
      tag,
      userId,
    });
  };



return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow flex flex-col gap-4">
      {/* タイトルは編集不可 */}
      <label htmlFor="title" className="font-bold">タイトル</label>
      <input id="title" value={title} className="p-2 rounded border border-gray-300 bg-gray-100" disabled />

      {editableFields.includes('description') && ( // 説明は編集可能なフィールドとして表示
        <>
          <label htmlFor="description" className="font-bold">説明</label>
          <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} className="p-2 rounded border border-gray-300" />
        </>
      )}

      {editableFields.includes('status') && (
        <>
          <label htmlFor="status" className="font-bold">ステータス</label>
          <select id="status" value={status} onChange={e => setStatus(e.target.value as TaskStatus)} className="p-2 rounded border border-gray-300">
            <option value="NOT_STARTED">未着手</option>
            <option value="IN_PROGRESS">進行中</option>
            <option value="COMPLETED">完了</option>
          </select>
        </>
      )}

      {editableFields.includes('deadline') && (
        <>
          <label htmlFor="deadline" className="font-bold">締切日</label>
          <input id="deadline" type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className="p-2 rounded border border-gray-300" required />
        </>
      )}

      {editableFields.includes('tag') && (
        <>
          <label htmlFor="tag" className="font-bold">タグ</label>
          <input id="tag" value={tag} onChange={e => setTag(e.target.value)} className="p-2 rounded border border-gray-300" />
        </>
      )}

      <button type="submit" className="p-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition">保存</button>
    </form>
  );
};