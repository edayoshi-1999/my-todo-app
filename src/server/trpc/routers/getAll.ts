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
// これにより、入力データのバリデーションに使用され、ステータスがこれらの値のいずれかであることを保証します。
const TaskStatusEnum = z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]);

// statusの絞り込みバージョン。
export const getAll = publicProcedure
  .input(
    z.object({
      status: TaskStatusEnum.optional(), //引数の型定義。
    })
  )
  .query(async ({ input }) => {
    const todos = await prisma.todo.findMany({
      // // where 条件で、status が指定されている場合はその値で絞り込みを行います。
// // input.status が undefined の場合は絞り込みを行いません。
      where: {
        status: input.status || undefined,
      },
      orderBy: {
        createdAt: 'desc', // 作成日の降順でソート
      },
    });
    return todos;
  });

//.input() は tRPC のプロシージャで引数（入力データ）を受け取る場合に使用します。
// 具体的には、クライアントから送信されるデータをバリデーションし、型安全に処理するために使用されます。

//.input() の役割
// ①入力データのスキーマ定義:
// zod を使用して、入力データの構造や型を定義します。
// これにより、クライアントから送信されるデータが期待する形式であることを保証します。
// ②型安全性の向上:
// 定義したスキーマに基づいて、TypeScript が型を推論します。
// サーバー側で型安全にデータを処理できます。
// ③バリデーション:
// クライアントから送信されたデータがスキーマに一致しない場合、エラーをスローします。

// .input() を使用するケース
// 引数が必要な場合:
// 例えば、特定の条件でデータをフィルタリングしたり、特定のリソースを取得する場合に使用します。
// このコードでは、status を引数として受け取り、タスクをステータスで絞り込むために .input() を使用しています。

// .input() を使用しないケース
// 引数が不要な場合:
// 例えば、すべてのデータを取得するだけで、クライアントから特定のデータを送信する必要がない場合は .input() を省略できます。


//まとめ.input() を使用する場合:
// クライアントから引数を受け取り、それを処理する必要がある場合。
// 例: フィルタリング、検索条件、ページネーションなど。

// .input() を使用しない場合:
// クライアントからの入力が不要で、固定の処理を行う場合。
// 例: すべてのデータを取得する場合。