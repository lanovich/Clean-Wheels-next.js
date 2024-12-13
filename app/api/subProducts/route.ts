import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const subProducts = await prisma.subProduct.findMany();

  return NextResponse.json(subProducts)
}