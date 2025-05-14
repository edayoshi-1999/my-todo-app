// src/server/trpc/routers/hello.ts
import { router, publicProcedure } from '../trpc'

// helloRouter は tRPC のルーターで、
// クライアントからのリクエスト(sayHelloの呼び出し)を処理するためのプロシージャを定義しています。
//sayHello プロシージャは、クライアントからのリクエストに対して Hello from tRPC! を返します。
export const helloRouter = router({
  sayHello: publicProcedure.query(() => {
    return 'Hello from tRPC!'
  }),
})