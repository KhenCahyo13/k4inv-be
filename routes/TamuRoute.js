import express from 'express';
import { getTamu, getTamuById, createTamu, deleteTamu, updateTamu, getTamuByPernikahan, getNamaTamu } from '../controllers/TamuController.js';

const trouter = express.Router();

trouter.get('/tamu/', getTamu);
trouter.get('/tamu/:id', getTamuById);
trouter.get('/tamubypernikahan/:id', getTamuByPernikahan);
trouter.get('/namatamu/:idPernikahan/:idTamu', getNamaTamu);
trouter.patch('/tamu/:id', updateTamu);
trouter.delete('/tamu/:id', deleteTamu)
trouter.post('/tamu/', createTamu);

export default trouter;