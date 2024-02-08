import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute({ name, email });
    return res.status(201).json(result);
  }
}


export default new CreateUserController;