import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../Errors/AppError";

export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDTO) {
    const userExists = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (userExists) {
      throw new AppError("User already exists!", 401);
    }

    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    });

    return user;

  }
}