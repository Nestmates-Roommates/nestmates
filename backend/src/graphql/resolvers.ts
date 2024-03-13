// import prisma from '../prisma/prismaClient';
import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient()

export const resolvers = {
  Query: {
    user: async (_, { id }) => {
      return await prismaClient.user.findUnique({
        where: { id: BigInt(id) },
      });
    },
    users: async () => {
      return await prismaClient.user.findMany();
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      return await prismaClient.user.create({
        data: input,
      });
    },
    updateUser: async (_, { id, input }) => {
      return await prismaClient.user.update({
        where: { id: BigInt(id) },
        data: input,
      });
    },
    deleteUser: async (_, { id }) => {
      return await prismaClient.user.delete({
        where: { id: BigInt(id) },
      });
    },
  },
};

