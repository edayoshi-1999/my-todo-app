//型定義のファイル
import { $Enums } from '@/generated/prisma';

export type Todo = {
  id: number;
  userId: number;
  title: string;
  description: string | null; // 修正: null を許容
  deadline: Date; // DateTime は文字列として扱われます
  status: $Enums.Status; // Prisma の Status型を直接使用
  updatedAt: Date;
  createdAt: Date;
};

