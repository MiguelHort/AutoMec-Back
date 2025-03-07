import express from 'express';
import { getPecas, addPeca } from '../controllers/pecaController.js';

const router = express.Router();

// Rota para obter as peças
router.get('/pecas', getPecas);

// Rota para adicionar uma nova peça
router.post('/pecas', addPeca);

export default router;
