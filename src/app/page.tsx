'use client'

import { trpc } from '@/lib/trpc'

export default function HomePage() {

  //クライアント側でのリクエスト
  // tRPCを利用して、リクエストをしている。
  // sayHelloは、helloRouterのsayHelloメソッドを呼び出している。
  //レスポンスは、dataに格納される。
  const { data, isLoading } = trpc.hello.sayHello.useQuery()

  if (isLoading) return <p>Loading...</p>

  return <h1>{data}</h1>  // => "Hello from tRPC!"
}