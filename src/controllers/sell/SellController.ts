import { Request, Response } from "express";
import SellModel from "../../models/SellModel";

class SellController {
    async findAll(req: Request, res: Response) {
        try {
            const sells = await SellModel.find();
            res.status(200).json(sells);
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar vendas" });
        }
    }

    async create(req: Request, res: Response) {
        console.log(req.body);
        try {
            const { sellList, total, user_id } = req.body;
            if (!sellList)
                return res.status(400).json({ message: "Lista de vendas é obrigatória" });
            if (!total)
                return res.status(400).json({ message: "Total é obrigatório" });
            if (!user_id)
                return res.status(400).json({ message: "Usuário é obrigatório" });

            const sell = await SellModel.create({ books:sellList, value:total, user_id });

            res.status(201).json({ message: "Venda criada com sucesso", data: sell });
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar venda" });
        }
    }
}

export default new SellController();