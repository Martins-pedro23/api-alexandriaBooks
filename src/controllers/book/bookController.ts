import { Request, Response } from "express";
import Book from "../../models/BookModel";

class BookController {
  async findAll(req: Request, res: Response) {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar livros" });
    }
  }
  async create(req: Request, res: Response) {
    try {
      const { title, description, price, stock } = req.body;

      if (!title)
        return res.status(400).json({ message: "Título é obrigatório" });
      if (!description)
        return res.status(400).json({ message: "Descrição é obrigatória" });
      if (!price)
        return res.status(400).json({ message: "Preço é obrigatório" });

      const book = await Book.create({ title, description, price, stock });

      res.status(201).json({ message: "Livro criado com sucesso", data: book });
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar livro" });
    }
  }
}

export default new BookController();
