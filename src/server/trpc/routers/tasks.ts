import { router, publicProcedure } from '../trpc';
import prisma from '@/lib/prisma';
import type { Todo } from '@/lib/definitions';

// tasksRouter は tRPC のルーターで、
// クライアントからのリクエスト(タスク一覧取得)を処理するためのプロシージャを定義しています。
export const tasksRouter = router({
  getAll: publicProcedure.query(async () => {
    const todos: Todo[] = await prisma.todo.findMany({
      orderBy: {
        createdAt: 'desc', // 作成日の降順でソート
      },
    });
    return todos;
  }),
});