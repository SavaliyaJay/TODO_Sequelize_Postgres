// const { Sequelize } = require('sequelize');

// const dbname = process.env.DB_NAME;
// const dbuser = process.env.DB_USER;
// const dbpassword = process.env.DB_PASSWORD;
// const dbhost = process.env.DB_HOST;
// const dbport = process.env.DB_PORT;

// const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
//     host: dbhost,
//     // port: dbport,
//     dialect: 'postgres',
// });

// const testConnection = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//         throw error; // This will rethrow the error, making it visible in the console
//     }
// };

// module.exports = sequelize;

const { Sequelize } = require('sequelize');

const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const dbhost = process.env.DB_HOST;

const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
    host: dbhost,
    dialect: 'postgres',
});

const connectDB = async () => {
    try {
        console.log('Trying to connect to the database...');
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, connectDB };
