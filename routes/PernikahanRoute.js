import express from 'express';
import { getPernikahan, getPernikahanById, createPernikahan, deletePernikahan, updatePernikahan, getOnePernikahanById } from '../controllers/PernikahanController.js';

const prouter = express.Router();

prouter.get('/pernikahan/', getPernikahan);
prouter.get('/pernikahan/:id', getPernikahanById);
prouter.get('/onepernikahan/:id', getOnePernikahanById);
prouter.patch('/pernikahan/:id', updatePernikahan);
prouter.post('/pernikahan/', createPernikahan);
prouter.delete('/pernikahan/:id', deletePernikahan);

export default prouter;

