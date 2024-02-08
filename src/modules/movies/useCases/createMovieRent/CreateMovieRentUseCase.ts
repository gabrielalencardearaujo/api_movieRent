import { AppError } from "../../../../Errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: CreateMovieRentDTO) {
    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId
      }
    })

    if (!movie) {
      throw new AppError('Movie does not exists', 404);
    }

    const movieRented = await prisma.movieRent.findFirst({
      where: {
        movieId
      }
    })

    if (movieRented) {
      throw new AppError('Movie already rented!', 403);
    }

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    if (!userExists) {
      throw new AppError('User doesnt exists!', 404)
    }

    await prisma.movieRent.create({
      data: {
        movieId,
        userId
      }
    })
  }
}