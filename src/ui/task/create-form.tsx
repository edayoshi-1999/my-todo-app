import { useState } from 'react';
import type { TaskStatus } from '@/lib/definitions';

interface CreateFormProps {
  onSubmit: (data: { title: string; description: string; status: TaskStatus; deadline: string; tag: string; userId: number }) => void;
}

export const CreateForm: React.FC<CreateFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<TaskStatus>('NOT_STARTED');
  const [deadline, setDeadline] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      status,
      deadline,
      tag,
      userId: 1,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto my-8 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow flex flex-col gap-4"
    >
      {/* タイトル */}
      <label htmlFor="title" className="font-bold">タイトル</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
        className="p-2 rounded border border-gray-300"
        required
      />

      {/* 説明 */}
      <label htmlFor="description" className="font-bold">説明</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="説明"
        rows={3}
        className="p-2 rounded border border-gray-300"
      />

      {/* ステータス */}
      <label htmlFor="status" className="font-bold">ステータス</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value as TaskStatus)}
        className="p-2 rounded border border-gray-300"
      >
        <option value="NOT_STARTED">未着手</option>
        <option value="IN_PROGRESS">進行中</option>
        <option value="COMPLETED">完了</option>
      </select>

      {/* 締切日 */}
      <label htmlFor="deadline" className="font-bold">締切日</label>
      <input
        id="deadline"
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="p-2 rounded border border-gray-300"
        required
      />

      {/* タグ */}
      <label htmlFor="tag" className="font-bold">タグ</label>
      <input
        id="tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="タグ"
        className="p-2 rounded border border-gray-300"
      />

      {/* 送信ボタン */}
      <button
        type="submit"
        className="p-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
      >
        送信
      </button>
    </form>
  );
};