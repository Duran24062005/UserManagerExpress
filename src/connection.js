import mysql from 'mysql2';
import { config } from './config.js';

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});

// console.log(config.mysql);


// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Exportar la conexión para usarla en otros módulos
export default connection;