import 'dotenv/config'
import mysql from 'mysql2/promise';


// Creating the connection object that needs to be passed around
const pool = mysql.createPool(process.env.DATABASE_URL)
export default pool;