'use client';

import { useRouter } from 'next/navigation';
import {CreateForm} from '@/ui/task/create-form';
import { trpc } from '@/lib/trpc';
import type {TaskStatus} from '@/lib/definitions';

const TaskPage: React.FC = () => {

  const router = useRouter();
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

      // タスクを作成するためのAPIを呼び出す
      await createTask.mutateAsync(data);

      // 追加後に /tasks へ遷移
      router.push('/tasks');

      // タスク作成成功のメッセージを表示
      alert('タスクが作成されました！');

    } catch (error) {
      console.error('タスク作成エラー:', error);
      alert('タスクの作成に失敗しました。');
    }
  };


  return (
    <div>
      <h1>タスク作成</h1>
      <CreateForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default TaskPage;