import { Sequelize } from 'sequelize';
import database from '../config/Database.js';
import User from './UserModel.js';

const { DataTypes } = Sequelize;

const Pernikahan = database.define('pernikahan', {
    id_pernikahan: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nama_perempuan: DataTypes.STRING,
    nama_laki: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    jam: DataTypes.TIME,
    tempat: DataTypes.STRING,
    deskripsi: DataTypes.STRING
}, {
    freezeTableName: true
});

User.hasMany(Pernikahan);
Pernikahan.belongsTo(User);

export default Pernikahan;

database.sync().then(() => {
    console.log('Pernikahan table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });