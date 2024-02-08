import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";
import { AppError } from "../../../../Errors/AppError";

export class CreateMovieUseCase {
  async execute({ title, duration, release_datee }: CreateMovieDTO) {
    const movieExists = await prisma.movie.findUnique({
      where: {
        title
      }
    })

    if (movieExists) {
      throw new AppError("Movie already exists!", 401);
    }

    const movie = await prisma.movie.create({
      data: {
        title, 
        duration, 
        release_datee
      }
    });

    return movie;

  }
}