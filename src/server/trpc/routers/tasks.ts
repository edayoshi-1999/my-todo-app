import { router, publicProcedure } from '../trpc';
import prisma from '@/lib/prisma';
import type { Todo } from '@/lib/definitions';
import { z } from 'zod';
import type { TaskStatus } from '@/lib/definitions';


// // tasksRouter は tRPC のルーターで、
// // クライアントからのリクエスト(タスク一覧取得)を処理するためのプロシージャを定義しています。
//絞り込みないバージョン。残しておく。
// export const tasksRouter = router({
//   getAll: publicProcedure.query(async () => {
//     const todos: Todo[] = await prisma.todo.findMany({
//       orderBy: {
//         createdAt: 'desc', // 作成日の降順でソート
//       },
//     });
//     return todos;
//   }),
// });


// TaskStatus 型を利用して z.enum を生成
const TaskStatusEnum = z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]);

// statusの絞り込みバージョン。
export const tasksRouter = router({
  getAll: publicProcedure
    .input(
      z.object({
        status: TaskStatusEnum.optional(), 
      })
    )
    .query(async ({ input }) => {
      const todos = await prisma.todo.findMany({
        where: {
          status: input.status as TaskStatus || undefined, // Prisma の型に一致
        },
        orderBy: {
          createdAt: 'desc', // 作成日の降順でソート
        },
      });
      return todos;
    }),
});