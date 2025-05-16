// //型定義のファイル
// import type { $Enums } from '@/generated/prisma';
//中〜大規模プロジェクトや Prisma に依存したくない場合
// 独自の型定義を作成する方法が適しています。この方法は、柔軟性が高く、将来的に Prisma を変更する可能性がある場合に適しています。


export type Todo = {
  id: number;
  userId: number;
  title: string;
  description: string | null; // 修正: null を許容
  deadline: Date; // DateTime は文字列として扱われます
  status: TaskStatus;
  updatedAt: Date;
  createdAt: Date;
  tag: string | null;
};

// ステータスの型を共通化
export type TaskStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

