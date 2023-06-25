import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
//   await prisma.user.deleteMany();
//   const user = await prisma.user.createMany({
//     data: [
//       {
//         name: "swapnil",
//         email: "swapnil@gmail.com",
//         age: 45,
//       },
//       {
//         name: "harshal",
//         email: "harshal@gmail.com",
//         age: 23,
//       },
//       {
//         name: "rahul",
//         email: "rahul@gmail.com",
//         age: 50,
//       },
//     ],
//   });

    // const user = await prisma.user.updateMany({
    //   where: {
    //     name: "swapnil",
    //   },
    //   data: {
    //     name: "sahil",
    //     email: "sahil@gmail.com",
    //   },
    // });

  const user = await prisma.user.findMany();

  console.log({ user });
}

main()
  .catch((e) => console.error(e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
