import { Sequelize } from 'sequelize';
import database from '../config/Database.js';
import User from './UserModel.js';

const { DataTypes } = Sequelize;

const Seminar = database.define('seminar', {
    id_seminar: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    judul_seminar: DataTypes.STRING,
    deskripsi_seminar: DataTypes.STRING,
    pemateri_seminar: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    jam: DataTypes.TIME,
    tempat: DataTypes.STRING
}, {
    freezeTableName: true,
});

User.hasMany(Seminar);
Seminar.belongsTo(User);

export default Seminar;

database.sync().then(() => {
    console.log('Seminar table created succesfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});