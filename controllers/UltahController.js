import Ultah from "../models/UltahModel.js";

export const createUltah = async (request, response) => {
    const {idUser, namaUltah, jam, tanggal, tempat, deskripsi} = request.body;
    try {
        await Ultah.create({
            id_user: idUser,
            nama_ultah: namaUltah,
            jam: jam,
            tanggal: tanggal,
            tempat: tempat,
            deskripsi: deskripsi
        });
        response.status(201).json({msg: "Undangan Ultah Berhasil Dibuat", id_user: idUser, nama_ultah: namaUltah, jam: jam, tanggal: tanggal, tempat: tempat, deskripsi: deskripsi});
    } catch (error) {
        console.log(error.message);
    }
}