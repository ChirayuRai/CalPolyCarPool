import'dotenv/config';
import * as mysql from 'mysql2/promise';


const pool = mysql.createPool(process.env.DATABASE_URL)
// try {

//     const [results, fields] = await pool.execute('SELECT * FROM User ')
//     console.log(results)
//     console.log(fields)

// } catch(err) {
//     console.error(err)
// }

export default pool;