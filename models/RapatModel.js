import { Sequelize } from 'sequelize';
import database from '../config/Database.js';
import User from './UserModel.js';

const { DataTypes } = Sequelize;

const Rapat = database.define('rapat', {
    id_rapat: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    instansi_rapat: DataTypes.STRING,
    nama_instansi_rapat: DataTypes.STRING,
    alamat_instansi: DataTypes.STRING,
    nomor_rapat: DataTypes.STRING,
    perihal_rapat: DataTypes.STRING,
    deskripsi_rapat: DataTypes.STRING,
    tanggal_rapat: DataTypes.DATE,
    waktu_rapat: DataTypes.TIME,
    tempat_rapat: DataTypes.STRING
}, {
    freezeTableName: true,
});

User.hasMany(Rapat);
Rapat.belongsTo(User);

export default Rapat;

database.sync().then(() => {
    console.log('Rapat table created succesfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});