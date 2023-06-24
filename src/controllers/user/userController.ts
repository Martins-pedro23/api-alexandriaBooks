import { Request, Response } from "express";
import User from "../../models/UserModel";

class UserController {
  async findAll(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar usuários" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      if (!name) return res.status(400).json({ message: "Nome é obrigatório" });
      if (!email)
        return res.status(400).json({ message: "Email é obrigatório" });
      if (!password)
        return res.status(400).json({ message: "Senha é obrigatório" });

      const user = await User.create({ name, email, password });

      res
        .status(201)
        .json({ message: "Usuário criado com sucesso", data: user });
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar usuários" });
    }
  }
}

export default new UserController();
