'use client';

import {EditForm} from '@/ui/task/edit-form';
import { trpc } from '@/lib/trpc';
import type {TaskStatus} from '@/lib/definitions';

const TaskPage: React.FC = () => {
  const createTask = trpc.tasks.create.useMutation();

  // タスク作成のための関数
  // 引数として受け取ったデータを使って、createTask.mutateAsyncを呼び出す
  const handleFormSubmit = async (data: {
    title: string;
    description: string;
    status: TaskStatus;
    deadline: string;
    tag: string;
    userId: number;
  }) => {
    try {
      await createTask.mutateAsync(data);
      alert('タスクが作成されました！');
    } catch (error) {
      console.error('タスク作成エラー:', error);
      alert('タスクの作成に失敗しました。');
    }
  };


  return (
    <div>
      <h1>タスク作成</h1>
      <EditForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default TaskPage;