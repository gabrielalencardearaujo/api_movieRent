import { Request, Response } from "express";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";

class CreateMovieRentController {
  async movieRent(req: Request, res: Response) {
    const { movieId, userId } = req.body;
    const createMovieRentUseCase = new CreateMovieRentUseCase();
    const result = await createMovieRentUseCase.execute({ movieId, userId });
    return res.status(200).json(result);
  }
}


export default new CreateMovieRentController;