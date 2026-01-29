import db from "../Db/db.js";

const table="users";

class userModel{
    static async createUserModel({name,email,password})
{
    const sql=`INSERT INTO ${table}(name,email,password) values(?,?,?)`
    const[result]=await db.execute(sql,[name,email,password])
    return result.insertId;
}
static async getAllUserModel(){
    const sql=`SELECT * FROM ${table}`
    const [rows]=await db.execute(sql);
    return rows;
}
static async updateUserPasswordModel(id,{password}){
    const sql=`UPDATE ${table} SET password=? WHERE id=?`;
    const update=await db.execute(sql,[password,id]);
    return update.affectedRows;
}

static async deleteUserModel(id){
    const sql=`DELETE FROM ${table} WHERE id=?`;
    const [delte]=await db.execute(sql,[id]);
    return delte.affectedRows;
}

}
export default userModel;

