import { useState } from 'react';
import type { TaskStatus } from '@/lib/definitions';

interface EditFormProps {
  onSubmit: (data: { title: string; description: string; status: TaskStatus; deadline: string; tag: string , userId: number}) => void;
}

export const EditForm: React.FC<EditFormProps> = ({ onSubmit }) => {
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
      style={{
        maxWidth: 400,
        margin: '2rem auto',
        padding: 24,
        border: '1px solid #ddd',
        borderRadius: 8,
        background: '#fafbfc',
        boxShadow: '0 2px 8px #eee',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {/* タイトル */}
      <label htmlFor="title" style={{ fontWeight: 'bold' }}>タイトル</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        required
      />

      {/* 説明 */}
      <label htmlFor="description" style={{ fontWeight: 'bold' }}>説明</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="説明"
        rows={3}
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
      />

      {/* ステータス */}
      <label htmlFor="status" style={{ fontWeight: 'bold' }}>ステータス</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value as TaskStatus)}
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
      >
        <option value="NOT_STARTED">未着手</option>
        <option value="IN_PROGRESS">進行中</option>
        <option value="COMPLETED">完了</option>
      </select>

      {/* 締切日 */}
      <label htmlFor="deadline" style={{ fontWeight: 'bold' }}>締切日</label>
      <input
        id="deadline"
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        required
      />

      {/* タグ */}
      <label htmlFor="tag" style={{ fontWeight: 'bold' }}>タグ</label>
      <input
        id="tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="タグ"
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
      />

      {/* 送信ボタン */}
      <button
        type="submit"
        style={{
          padding: 10,
          borderRadius: 4,
          border: 'none',
          background: '#1976d2',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        送信
      </button>
    </form>
  );
};