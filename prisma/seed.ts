import { PrismaClient, Status } from '@/generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
  
  // ユーザーの作成
  const user = await prisma.user.create({
    data: {
      name: 'edano',
      email: 'edano@example.com',
      password: 'password', // ※実際はハッシュ化すべき
    },
  })

  // Todo を複数件作成
  await prisma.todo.createMany({
    data: [
      {
        title: 'Next.js学習',
        description: 'App Routerについて学ぶ',
        deadline: new Date('2025-06-01'),
        status: Status.NOT_STARTED,
        userId: user.id,
      },
      {
        title: 'Prismaの導入',
        description: '型安全なORMとして設定',
        deadline: new Date('2025-06-05'),
        status: Status.IN_PROGRESS,
        userId: user.id,
      },
      {
        title: 'tRPC実装',
        description: 'APIとフロントの型統合',
        deadline: new Date('2025-06-10'),
        status: Status.COMPLETED,
        userId: user.id,
      },
    ],
  })

  console.log('🌱 Seed completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })