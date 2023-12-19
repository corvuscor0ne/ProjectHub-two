const { Pool } = require('pg');

const pool = new Pool({
    user: 'ZafMIg',
    host: 'http://localhost:3000',
    database: 'postgres',
    password: '6541',
    port: 5432, // порт по умолчанию для PostgreSQL
});

module.exports = pool;
