//db connectivity code   server--->database
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config();

const db=mysql.createPool({ // help to maintain multiple connections and defining connectivity strings
    host:process.env.SQL_HOST,
    database:process.env.SQL_DB,
    user:process.env.SQL_USER,
    password:process.env.SQL_PASS,
    port:process.env.SQL_PORT,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

export const connectDB=async() => {
    try{
        const connection = await db.getConnection();
        console.log('db connected successfully');
        connection.release(); //if the connections are not established properly and if we want to establish a single connection then we can give this [this line is not necessary] this is used for testing
    }catch(err){
        console.error("connection is not established");
    }
}
export default db;
