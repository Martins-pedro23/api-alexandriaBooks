import { Request, Response } from "express";
import User from "../../models/UserModel";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

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
      const criptoPassword = bcrypt.hashSync(password, 10);

      if (!name) return res.status(400).json({ message: "Nome é obrigatório" });
      if (!email)
        return res.status(400).json({ message: "Email é obrigatório" });
      if (!password)
        return res.status(400).json({ message: "Senha é obrigatório" });

      const user = await User.create({ name, email, password: criptoPassword });

      res
        .status(201)
        .json({ message: "Usuário criado com sucesso", data: user });
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar usuários" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email)
        return res.status(400).json({ message: "Email é obrigatório" });
      if (!password)
        return res.status(400).json({ message: "Senha é obrigatório" });

      const login = await User.findOne({ email });

      if (login) {
        const verifyPassword = bcrypt.compareSync(
          password,
          login.password as string
        );
        if (verifyPassword) {
          const token = jwt.sign(
            { id: login._id, email: login.email },
            process.env.JWT_SECRET as string,
            {
              expiresIn: "1d",
            }
          );
          return res
            .status(200)
            .json(token);
        }
      }
      return res.status(401).json({ message: "Usuário ou senha inválidos" });
    } catch (error) {
      res.status(400).json({ message: "Erro ao efetuar login" });
    }
  }
}

export default new UserController();
