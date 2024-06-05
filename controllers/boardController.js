import dbConnection from "../config/dbConfig.js";


const getBoardById= async (req,res) => {

    const boardId = req.params.id;
    try {

        const [board] = await dbConnection.query(`SELECT * FROM boards WHERE id = ?`, [boardId]);

        res.status(200).json(board);

    }
    catch (error) {
        res.status(400).json(error.message)    
    }

}

const getUserBoards= async (req,res) => {
    const userId=req.params.id;
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

const boardController= {
    getBoardById,
    getUserBoards
}
export default boardController