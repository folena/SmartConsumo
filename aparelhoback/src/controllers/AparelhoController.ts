import { Request, Response } from 'express';
import User from '../models/Aparelho';


class AparelhoController {

  async listAll(request: Request, response: Response) {
    const users = await User.find();
    response.json(users);
  }

  async create(request: Request, response: Response) {

    const { name, tempoUso, qtdEnergy} = request.body;
    const user = await User.create({ name: name, tempoUso: tempoUso, qtdEnergy: qtdEnergy});
    response.status(201).json(user);
  }

  async get(request: Request, response: Response) {
    const { id } = request.params;

    if (id.length != 24) {
      return response.status(422).json({
        message: `player não encontrado`
      })
    }

    const user = await User.findById(id);
    if (user)
      return response.status(201).json(user);
    return response.status(404).json({
      message: `aparelho ${id} não encontrado`
    })
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    User.findByIdAndDelete(id).then((user) => {
      if (user)
        return response.sendStatus(204);
      return response.sendStatus(404);
    })
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;
    User.findByIdAndUpdate(id, {name: name}, {new: true})
      .then((user) => {
        if (user) 
          return response.status(201).json(user);
        return response.status(404).json({ message: `aparelho ${id} não encontrado!` });
      });
  }

}

export default new AparelhoController();
