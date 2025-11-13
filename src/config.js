import 'dotenv/config';

export const config = {
    app: {
        port: process.env.PORT || 3000
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DB_NAME || 'my_database'
    },
    mongodb: {
        cloud_uri: process.env.MONGO_URI_CLOUD,
        local_uri: process.env.LOCAL,
        host: 'localhost',
        user: '',
        password: '',
        database: '',
        port: 27017
    }
};