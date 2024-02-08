import { Request, Response } from "express";
import { GetMoviesByReleaseDateUseCase } from "./GetMoviesbyReleaseDateUseCases";

class GetMoviesbyReleaseDateController {
  async movieRelease(req: Request, res: Response) {
    const getMoviesbyReleaseDateController = new GetMoviesByReleaseDateUseCase();
    const result = await getMoviesbyReleaseDateController.execute();

    return res.status(200).json(result);
  }
}


export default new GetMoviesbyReleaseDateController;