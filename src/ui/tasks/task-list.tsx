//タスクを一覧表示する

import React from 'react';
import type { Todo } from '@/lib/definitions';

export default function TaskList({ tasks }: { tasks: Todo[] }) {

  //　ステータスを「完了、着手中、未着手」と日本語で表示するためのマップを作成
  const statusMap: { [key: string]: string } = {
    NOT_STARTED: '未着手',
    IN_PROGRESS: '着手中',
    COMPLETED: '完了',
  };


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">タスク一覧</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p>{task.description || 'No description'}</p>
            <p>締め切り: {new Date(task.deadline).toLocaleDateString()}</p>
            <p>ステータス: {statusMap[task.status]}</p>
            <p className="text-sm text-gray-700">
              {/* タグが存在しない場合は 'タグなし' を表示。 */}
              タグ: {task.tag || 'タグなし'} 
            </p>
            <p className="text-sm text-gray-500">
              作成日: {new Date(task.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}