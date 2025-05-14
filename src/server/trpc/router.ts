// src/server/trpc/router.ts
import { router } from './trpc'
import { helloRouter } from './routers/hello'

//helloRouter を登録した tRPC のルーター
//クライアントからのリクエストは、このルーターを通じて適切なプロシージャにルーティングされます。
// ルーターはネストできるので、必要に応じて追加のルーターを作成して登録することができます
// 例えば、ユーザー関連のルーターや商品関連のルーターなどを作成し、ここでまとめて登録することができます
export const appRouter = router({
  hello: helloRouter,
})

export type AppRouter = typeof appRouter
