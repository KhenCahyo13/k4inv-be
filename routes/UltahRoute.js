import express from 'express';
import { createUltah } from '../controllers/UltahController.js';

const urouter = express.Router();

urouter.post('/ultah/', createUltah);

export default urouter;