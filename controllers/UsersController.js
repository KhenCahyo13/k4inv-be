import User from "../models/UserModel.js";
import bcrypt from 'bcrypt';

export const getUsers = async (request, response) => {
    try {
        const res = await User.findAll();
        response.status(200).json(res);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAdminData = async (request, response) => {
    try {
        const res = await User.findAll({
            where: {
                level: "Admin"
            }
        });
        response.status(200).json(res)
    } catch (error) {
        console.log(error);
    }
}

export const getPenggunaData = async (request, response) => {
    try {
        const res = await User.findAll({
            where: {
                level: "Pengguna"
            }
        });
        response.status(200).json(res);
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async (request, response) => {
    try {
        const res = await User.findOne({
            where: {
                id_user: request.params.id
            }
        });
        response.status(200).json(res);
    } catch (error) {
        console.log(error.message);
    }
}

export const addUsers = async (request, response) => {
    const {nama, email, password, confPassword, level} = request.body;
    if(password !== confPassword) return response.status(400).json({msg: "Password dan Konfirmasi Password Tidak Sama"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await User.create({
            nama_user: nama,
            email_user: email,
            password: hashPassword,
            level: level
        });
        response.status(200).json({msg: "Data Berhasil Ditambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const createUsers = async (request, response) => {
    const {nama, email, password, confPassword} = request.body;
    if(password !== confPassword) return response.status(400).json({msg: "Password dan Konfirmasi Password Tidak Sama"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await User.create({
            nama_user: nama,
            email_user: email,
            password: hashPassword
        });
        response.status(201).json({msg: "Pendaftaran Berhasil"})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUsers = async (request, response) => {
    try {
        await User.update(request.body, {
            where: {
                id_user: request.params.id
            }
        });
        response.status(200).json({msg: "Data Berhasil Di Update"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async (request, response) => {
    try {
        await User.destroy({
            where: {
                id_user: request.params.id
            }
        });
        response.status(200).json({msg: "Data Berhasil Dihapus"});
    } catch (error) {
        console.log(error.message);
    }
}