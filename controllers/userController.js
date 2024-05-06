import dbConnection from "../config/dbConfig.js";

const getAllUsers = async (req,res) => {

    
    try {
        const [result] = await dbConnection.query(`SELECT * FROM users`)
    
        res.status(200).json(result);
      } 
      catch (error) {
        res.status(400).json(error.message)    
      }
}

const createNewUser = async (req,res) => {

    const {firstName,lastName,email,password}=req.body;
    
    try {

        const user=await dbConnection.query('INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?,?,?)',
        [firstName, lastName,email,password])
    
        res.status(201).json("user has been added");
      } 
      catch (error) {
        res.status(400).json(error.message)    
      }
}


const userController= {
    getAllUsers,
    createNewUser
}
export default userController