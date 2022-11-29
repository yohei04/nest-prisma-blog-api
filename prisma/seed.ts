import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy users
  const user1 = await prisma.user.upsert({
    where: { email: 'hoge-1@example.com' },
    update: {},
    create: {
      name: 'takashi',
      email: 'hoge-1@example.com',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'hoge-2@example.com' },
    update: {},
    create: {
      name: 'syota',
      email: 'hoge-2@example.com',
    },
  });

  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
