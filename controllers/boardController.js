import dbConnection from "../config/dbConfig.js";


const getBoardById= async (req,res) => {

    const boardId = req.params.boardid;
    try {

        const [board] = await dbConnection.query(`SELECT * FROM boards WHERE id = ?`, [boardId]);

        res.status(200).json(board);

    }
    catch (error) {
        res.status(400).json(error.message)    
    }

}

const getBoardTasks= async (req,res) => {

    const boardId=req.params.boardid;
    try {

        const query= `SELECT tasks.title FROM tasks
        WHERE tasks.boardId=?`;
        const [tasks]=await dbConnection.query(query, [boardId]);
        res.status(200).json(tasks)
    }
    catch (error) {
        res.status(400).json(error.message)    
    }
}



const boardController= {
    getBoardById,
    getBoardTasks
}
export default boardController