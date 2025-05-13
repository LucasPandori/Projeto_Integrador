import "dotenv/config.js"
import mysql from 'mysql2/promise.js'

const pool = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'univesp',
    database: 'pet',
})

export default pool

