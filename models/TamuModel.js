import { Sequelize } from 'sequelize';
import database from '../config/Database.js';
import Pernikahan from './PernikahanModel.js';
import Ultah from './UltahModel.js';
import Rapat from './RapatModel.js';
import Seminar from './SeminarModel.js';
import Wisuda from './WisudaModel.js';

const { DataTypes } =  Sequelize;

const Tamu = database.define('tamu', {
    id_tamu: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nama_tamu: DataTypes.STRING,
    email_tamu: DataTypes.STRING,
    status: DataTypes.ENUM('Hadir', 'Belum')
}, {
    freezeTableName: true,
});

Pernikahan.hasMany(Tamu);
Tamu.belongsTo(Pernikahan);

Ultah.hasMany(Tamu);
Tamu.belongsTo(Ultah);

Rapat.hasMany(Tamu);
Tamu.belongsTo(Rapat);

Seminar.hasMany(Tamu);
Tamu.belongsTo(Seminar);

Wisuda.hasMany(Tamu);
Tamu.belongsTo(Wisuda);

export default Tamu;

database.sync().then(() => {
    console.log('Tamu table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });