import { PrismaClient } from "@prisma/client";
import { categories } from "../src/app/lib/data/categories";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: categories,
    skipDuplicates: true
  });
  
  console.log('Seed data created successfully');

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });