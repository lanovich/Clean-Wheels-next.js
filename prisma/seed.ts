import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, products, subProducts } from "./constants";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.subProduct.createMany({
    data: subProducts,
  });

  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        categoryId: product.categoryId,
        subProducts: {
          connect: product.subProducts?.connect,
        },
      },
    });
  }

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "2222222",
      },
    ],
  });

  await prisma.cartItem.create({
    data:
      {
        productId: 1,
        cartId: 1,
        quantity: 2,
        subProducts: {
          connect: [{id: 1}, {id: 2}, {id: 3}]
        },
      }
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "SubProduct" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
