import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //   await prisma.user.deleteMany();
  const user = await prisma.user.findMany({
    where: {
      AND: [
        {
          name: {
            contains: "h",
          },
        },
        {
          email: {
            contains: "@gmail.com",
          },
        },
      ],
    },
  });

  console.log({ user });
}

main()
  .catch((e) => console.error(e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
