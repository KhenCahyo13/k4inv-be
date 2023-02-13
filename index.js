import express from 'express';
import cors from 'cors';
import router from './routes/UserRoute.js';
import prouter from './routes/PernikahanRoute.js';
import trouter from './routes/TamuRoute.js';
import urouter from './routes/UltahRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(prouter);
app.use(trouter);
app.use(urouter);

app.listen(4000, () => console.log('Server berjalan di port 4000....'));