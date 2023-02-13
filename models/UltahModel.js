import { Sequelize } from 'sequelize';
import database from '../config/Database.js';
import User from './UserModel.js';

const { DataTypes } = Sequelize;

const Ultah = database.define('ultah', {
    id_ultah: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nama_ultah: DataTypes.STRING,
    jam: DataTypes.TIME,
    tanggal: DataTypes.DATE,
    tempat: DataTypes.STRING,
    deskripsi: DataTypes.STRING
}, {
    freezeTableName: true,
});

User.hasMany(Ultah);
Ultah.belongsTo(User);

export default Ultah;

database.sync().then(() => {
    console.log('Ultah table created succesfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});