import { router, publicProcedure } from '../trpc';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import type { TaskStatus } from '@/lib/definitions';


// TaskStatus 型を利用して z.enum を生成
// これにより、入力データのバリデーションに使用され、ステータスがこれらの値のいずれかであることを保証します。
const TaskStatusEnum = z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]);

export const update = publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1),
        description: z.string().optional(),
        status: TaskStatusEnum,
        deadline: z.string().transform(val => new Date(val)),
        tag: z.string().optional(),
        userId: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const updated = await prisma.todo.update({
        where: { id: Number(input.id) },
        data: {
          title: input.title,
          description: input.description || null,
          status: input.status,
          deadline: input.deadline,
          tag: input.tag || null,
          userId: input.userId,
        },
      });
      return updated;
});