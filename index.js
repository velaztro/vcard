const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.users.findMany()
  console.log(allUsers)
}

main();