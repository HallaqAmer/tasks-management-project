import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const dbConnection=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT,
    charset: "utf8mb4",

})

dbConnection.getConnection()
.then(conn => {
    const res = conn.query('SELECT 1');
    conn.release();
    return res;
  }).then(results => {
    console.log('Connected to MySQL DB');
  }).catch(err => {
    console.log(err); 
  });

export default dbConnection;
