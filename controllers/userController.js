import dbConnection from "../config/dbConfig.js";

const getAllUsers = async (req,res) => {

    
    try {
        const [users] = await dbConnection.query(`SELECT * FROM users`)
    
        res.status(200).json(users);
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

const getUserById = async(req,res) => {

  const userId = req.params.userid;
  try {

    const [user] = await dbConnection.query(`SELECT * FROM users WHERE id = ?`, [userId]);
    
    res.status(200).json(user);

  }
  catch (error) {
    res.status(400).json(error.message)    
  }

}

const updateUserById = async(req,res) => {

  const userId=req.params.userid;
  const {firstName,lastName,email,password}=req.body
  try {
    const query= 'UPDATE users SET firstName = ?, lastName=?, email = ?,password= ? WHERE id = ?';
    await dbConnection.query(query,[firstName,lastName,email,password,userId])
    res.status(200).send('User updated successfully')

  }
  catch (error) {
    res.status(404).json(error.message)    
  }

}

const deleteUserById = async(req,res) => {

  const userId=req.params.userid;
  try {
    const query= 'DELETE FROM users WHERE id = ?';
    await dbConnection.query(query,[userId])
    res.status(200).send('User deleted successfully')

  }
  catch (error) {
    res.status(404).json(error.message)    
  }

}

const getUserBoards= async (req,res) => {
  const userId=req.params.userid;
  try {

      const query=`SELECT boards.id,name,type,description, concat(firstName,' ',lastName) as "creator" FROM boards
      JOIN users on users.id=boards.userId
      WHERE users.id=?`;
      const [boards]= await dbConnection.query(query,[userId])
      res.status(200).json(boards);
  }
  catch(error) {
      res.status(400).json(error.message)
  }
}

const getUserTasks= async (req,res) => {

  const userId=req.params.userid;
  try {

      const query= `SELECT tasks.title,users.firstName as "Creator",boards.name as "boardName" FROM tasks
      JOIN boards on boards.id=tasks.boardId
      JOIN users on users.id=tasks.userId
      WHERE tasks.userId=?`;
      const [tasks]=await dbConnection.query(query, [userId]);
      res.status(200).json(tasks)
  }
  catch (error) {
      res.status(400).json(error.message)    
  }
}


const userController= {
    getAllUsers,
    createNewUser,
    getUserById,
    updateUserById,
    deleteUserById,
    getUserBoards,
    getUserTasks
}
export default userController