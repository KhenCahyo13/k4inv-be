import Tamu from "../models/TamuModel.js";

export const createTamu = async (request, response) => {
    const {namaTamu, emailTamu, idPernikahan} = request.body;
    try {
        await Tamu.create({
            nama_tamu: namaTamu,
            email_tamu: emailTamu,
            pernikahanIdPernikahan: idPernikahan
        });
        response.status(200).json({msg: "Tamu Berhasil Ditambahkan", nama_tamu: namaTamu, email_tamu: emailTamu, pernikahanIdPernikahan: idPernikahan});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTamu = async (request, response) => {
    try {
        await Tamu.destroy({
            where: {
                id_tamu: request.params.id
            }
        });
        response.status(200).json({msg: "Tamu Berhasil Dihapus dengan Id " + request.params.id});
    } catch(error) {
        console.log(error.message);
    }
}

export const updateTamu = async (request, response) => {
    try {
        await Tamu.update(request.body, {
            where: {
                id_tamu: request.params.id
            }
        });
        response.status(200).json({msg: "Tamu Berhasil Diupdate"});
    } catch (error) {
        console.log(error.message);
    }
}

export const getTamuById = async (request, response) => {
    try {
        const res = await Tamu.findOne({
            where: {
                id_tamu: request.params.id
            }
        });
        response.status(200).json(res);
    } catch(error) {
        console.log(error.message)
    }
}

export const getTamu = async (request, response) => {
    try {
        const res = await Tamu.findAll();
        response.status(200).json(res);
    } catch(error) {
        console.log(error.message);
    }
}

export const getTamuByPernikahan = async (request, response) => {
    try {
       const res = await Tamu.findAll({
            where: {
                pernikahanIdPernikahan: request.params.id
            }
        });
        response.status(200).json(res);
    } catch (error) {
        console.log(error.message)
    }
}

export const getNamaTamu = async (request, response) => {
    try {
        const res = await Tamu.findOne({
            where: {
                pernikahanIdPernikahan: request.params.idPernikahan,
                id_tamu: request.params.idTamu
            }
        });
        response.status(200).json(res);
    } catch (error) {
        console.log(error.message);
    }
}