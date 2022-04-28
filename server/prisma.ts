import prisma from "@prisma/client";
const  { PrismaClient } = prisma;
export const orm = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await orm.$disconnect()
  })