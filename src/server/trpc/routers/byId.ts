import { router, publicProcedure } from '../trpc';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import type { TaskStatus } from '@/lib/definitions';


// TaskStatus 型を利用して z.enum を生成
// これにより、入力データのバリデーションに使用され、ステータスがこれらの値のいずれかであることを保証します。
const TaskStatusEnum = z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]);

export const byId = publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const task = await prisma.todo.findUnique({
        where: { id: Number(input.id) },
      });
      return task;
});