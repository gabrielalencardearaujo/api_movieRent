import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

class GetAllUsersController {
  async userRelease(req: Request, res: Response) {
    const getAllUsersUseCase = new GetAllUsersUseCase();
    const result = await getAllUsersUseCase.execute();

    return res.status(200).json(result);
  }
}


export default new GetAllUsersController;