// src/server/trpc/context.ts
export type Context = {
  userId?: number
}

export async function createContext(): Promise<Context> {
  // 認証情報などあればここで取得
  return {}
}