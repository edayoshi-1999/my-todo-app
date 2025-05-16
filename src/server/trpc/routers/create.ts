import { router, publicProcedure } from '../trpc';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import type { TaskStatus } from '@/lib/definitions';


// TaskStatus 型を利用して z.enum を生成
// これにより、入力データのバリデーションに使用され、ステータスがこれらの値のいずれかであることを保証します。
const TaskStatusEnum = z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]);

export const create = publicProcedure
  .input(
    // zod を使用して、入力データの構造や型を定義します。
    // これにより、クライアントから送信されるデータが期待する形式であることを保証します。
    z.object({
      title: z.string().min(1, "タイトルは必須です"),
      description: z.string().optional(), // 説明は任意
      deadline: z.string().transform(val => new Date(val)), // サーバー側で文字列を Date オブジェクトに変換
      status: TaskStatusEnum,
      tag: z.string().optional(), // タグは任意
      userId: z.number(), // userId を追加
    })
  )
  .mutation(async ({ input }) => { //mutationはデータの変更を行うためのプロシージャ
    // Prisma を使用して新しいタスクをデータベースに作成します。
    // input から受け取ったデータを使用して、タスクを作成します。
    const newTask = await prisma.todo.create({
      data: {
        title: input.title,
        description: input.description || null,
        deadline: input.deadline,
        status: input.status,
        tag: input.tag || null,
        userId: input.userId, // userId を指定
      },
    });
    return newTask;
  });