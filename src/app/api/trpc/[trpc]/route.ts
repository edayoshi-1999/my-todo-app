// src/app/api/trpc/[trpc]/route.ts

import { appRouter } from '@/server/trpc/router'
import { createContext } from '@/server/trpc/context'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

//API Routes がリクエストを受け取り、fetchRequestHandler を使用して 
// tRPC のルーター(src/server/trpc/router.tsのappRouter)にルーティングします。

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  })

export { handler as GET, handler as POST }