import { Request, Response } from 'express';

export class UserController {
  async singin(req: Request, res: Response) {
    return res.send('Logando com o usuário...');
  }

  async singup(req: Request, res: Response) {
    return res.send('Cadastrando um o usuário...');
  }
}
