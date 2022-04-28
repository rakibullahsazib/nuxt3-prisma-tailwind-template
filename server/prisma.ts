import prisma from "@prisma/client";
const  { PrismaClient } = prisma;
export const orm = new PrismaClient()