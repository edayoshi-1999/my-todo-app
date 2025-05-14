//タスクを一覧表示する

import React from 'react';
import { Todo } from '@/lib/definitions';

export default function TaskList({ tasks }: { tasks: Todo[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">タスク一覧</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p>{task.description || 'No description'}</p>
            <p>締め切り: {new Date(task.deadline).toLocaleDateString()}</p>
            <p>ステータス: {task.status}</p>
            <p className="text-sm text-gray-500">
              作成日: {new Date(task.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}