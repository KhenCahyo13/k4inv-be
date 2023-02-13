import express from 'express';
import Login from '../controllers/Login.js';
import Logout from '../controllers/Logout.js';
import { getUsers, getUserById, createUsers, updateUsers, deleteUser, getAdminData, getPenggunaData, addUsers } from '../controllers/UsersController.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/admin', getAdminData);
router.get('/users/pengguna', getPenggunaData);
router.get('/users/:id', getUserById);
router.get('/logout', Logout);
router.post('/users', createUsers);
router.post('/users/addUsers/', addUsers);
router.post('/login/', Login);
router.patch('/users/:id', updateUsers);
router.delete('/users/:id', deleteUser);

export default router;