'use client';

import { useParams, useRouter } from 'next/navigation';
import { trpc } from '@/lib/trpc';
import { EditForm } from '@/ui/task/edit-form';
import type { TaskStatus } from '@/lib/definitions';

export default function EditTaskPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string; // URLパラメータから取得したidをstring型にキャスト

  // タスク取得
  const { data: task, isLoading } = trpc.tasks.byId.useQuery({ id });

  // タスク更新
  const updateTask = trpc.tasks.update.useMutation();

  // タスクが取得できていない場合は、ローディング中またはエラーメッセージを表示
  if (isLoading) return <div>読み込み中...</div>;
  if (!task) return <div>タスクが見つかりません</div>;

  const handleEdit = async (data: {
    title: string;
    description: string;
    status: TaskStatus;
    deadline: string;
    tag: string;
    userId: number;
  }) => {
    await updateTask.mutateAsync({ 
        id,
        ...data,
        title: task.title, // タイトルを変更不可にするため、最後に指定して上書きする
     });
    router.push('/tasks');
  };

  return (
    <EditForm
      initialValues={{
        title: task.title,
        description: task.description ?? '',
        status: task.status,
        deadline: task.deadline.slice(0, 10), // "YYYY-MM-DD"
        tag: task.tag ?? '',
        userId: task.userId,
      }}
      onSubmit={handleEdit}
      editableFields={['description', 'status', 'deadline', 'tag']}
    />
  );
}