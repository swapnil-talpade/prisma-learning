import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "swapnil",
      age: 27,
      email: "swapnil@gmail.com",
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    select: {
      name: true,
      userPreference: {
        select: {
          id: true,
        },
      },
    },
  });

  console.log({ user });
}

main()
  .catch((e) => console.error(e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
