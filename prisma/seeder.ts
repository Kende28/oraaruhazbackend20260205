import dotenv from 'dotenv'
import { faker } from '@faker-js/faker';
import { PrismaClient } from 'generated/prisma/client';


dotenv.config()

const prisma = new PrismaClient()

console.log("seeding...")

async function main() {
    for (let i = 0; i < 15; i++) {
      await prisma.cart.create({
        data: {
          watch_id: faker.number.int({
            min: 1,
            max: 15
          }),
          quantity: faker.number.int(),
          added_at: faker.date.recent()
        }
      })
      
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
