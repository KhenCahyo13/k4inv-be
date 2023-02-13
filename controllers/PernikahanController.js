import Pernikahan from "../models/PernikahanModel.js";

export const createPernikahan = async (request, response) => {
    const {idUser, perempuan, laki, tanggal, jam, tempat, deskripsi} = request.body;
    try {
        await Pernikahan.create({
            id_user: idUser,
            nama_perempuan: perempuan,
            nama_laki: laki,
            tanggal: tanggal,
            jam: jam,
            tempat: tempat,
            deskripsi: deskripsi
        });
        response.status(201).json({msg: "Undangan Pernikahan Berhasil Dibuat", id_user: idUser, nama_perempuan:perempuan, nama_laki: laki, tanggal: tanggal, jam: jam, tempat: tempat, deskripsi: deskripsi});
    } catch(error) {
        console.log(error.message)
    }
}

export const updatePernikahan = async (request, response) => {
    const {perempuan, laki, tanggal, jam, tempat, deskripsi} = request.body;
    try {
        await Pernikahan.update(request.body, {
            where: {
                id_pernikahan: request.params.id
            }
        });
        response.status(200).json({msg: "Data Pernikahan Berhasil Di Update"})
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePernikahan = async (request, response) => {
    try {
        await Pernikahan.destroy({
            where: {
                id_pernikahan: request.params.id
            }
        });
        response.status(200).json({msg: "Data Pernikahan Berhasil Dihapus"});
    } catch (error) {
        console.log(error.message)
    }
}

export const getPernikahan = async (request, response) => {
    try {
        const res = await Pernikahan.findAll();
        response.status(200).json(res);
    } catch (error) {
        console.log(error.message)
    }
}

export const getPernikahanById = async (request, response) => {
    try {
        const res = await Pernikahan.findAll({
            where: {
                userIdUser: request.params.id
            }
        });
        response.status(200).json(res);
    } catch (error) {
        console.log(error.message);
    }
}

export const getOnePernikahanById = async (request, response) => {
    try {
        const res = await Pernikahan.findOne({
            where : {
                id_pernikahan: request.params.id
            }
        });
        response.status(200).json(res);
    } catch (error) {
        console.log(error.message);
    }
}