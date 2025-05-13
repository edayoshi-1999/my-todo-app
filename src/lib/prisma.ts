import { PrismaClient } from '@/generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'


//開発中の「ホットリロード」による PrismaClient の多重生成を防ぐために、
// グローバル変数に Prisma インスタンスを保持するコードです。
// これにより、開発中は同じ PrismaClient インスタンスを使い続けることができます。

//TypeScript でグローバル変数 global.prisma に型情報をつけている
const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}


//global.prisma がすでに存在すればそれを使う
// なければ新しく PrismaClient を作成して、それに withAccelerate() を拡張して使う
const prisma = globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())


//開発環境のときだけ global.prisma に Prisma インスタンスを保存
// 本番では毎回新しく作っても問題ないのでスキップ
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


//このファイルを読み込めば、いつでも同じ PrismaClient を使える
export default prisma