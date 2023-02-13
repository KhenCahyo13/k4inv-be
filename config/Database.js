import { Sequelize } from "sequelize";

const database = new Sequelize('k4invitation_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default database;