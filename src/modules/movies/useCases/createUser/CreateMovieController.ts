import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

class CreateUserController {
  async createMovie(req: Request, res: Response) {
    const { title, duration, release_datee } = req.body;
    const createMovieUseCase = new CreateMovieUseCase();
    const result = await createMovieUseCase.execute({ title, duration, release_datee });
    return res.status(201).json(result);
  }
}


export default new CreateUserController;