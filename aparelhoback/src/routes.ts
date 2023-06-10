import { Router, Request, Response } from 'express';
import AparelhoController from './controllers/AparelhoController';

export const router = Router();

router.get('/api/aparelhos', AparelhoController.listAll);
router.get('/api/aparelho/:id', AparelhoController.get);
router.post('/api/aparelho', AparelhoController.create);
router.put('/api/aparelho/:id', AparelhoController.update);