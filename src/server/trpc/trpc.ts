// src/server/trpc/trpc.ts
import { initTRPC } from '@trpc/server'
import { Context } from './context'

// tRPC を初期化し、router と publicProcedure をエクスポートします。
// Context を使用して、必要なコンテキスト情報をプロシージャに渡すことができます。

const t = initTRPC.context<Context>().create()

export const router = t.router
export const publicProcedure = t.procedure
