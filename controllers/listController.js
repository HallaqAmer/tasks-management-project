import dbConnection from "../config/dbConfig.js";

const getListById= async (req,res) => {

    const listId = req.params.id;
    try {

        const [list] = await dbConnection.query(`SELECT * FROM lists WHERE id = ?`, [listId]);

        res.status(200).json(list);

    }
    catch (error) {
        res.status(400).json(error.message)    
    }

}

const getBoardLists= async (req,res) => {

    const boardId=req.params.id;
    try {

        const query= `SELECT lists.name,lists.createdAt,users.firstName as "Creator",boards.name as "boardName" FROM lists
        JOIN boards on boards.id=lists.boardId
        JOIN users on users.id=lists.userId
        WHERE lists.boardId=?`;
        const [lists]=await dbConnection.query(query, [boardId]);
        res.status(200).json(lists)
    }
    catch (error) {
        res.status(400).json(error.message)    
    }
}

const getUserLists= async (req,res) => {

    const userId=req.params.id;
    try {

        const query= `SELECT lists.name,lists.createdAt,users.firstName as "Creator",boards.name as "boardName" FROM lists
        JOIN boards on boards.id=lists.boardId
        JOIN users on users.id=lists.userId
        WHERE lists.userId=?`;
        const [lists]=await dbConnection.query(query, [userId]);
        res.status(200).json(lists)
    }
    catch (error) {
        res.status(400).json(error.message)    
    }
}

const getBoardListsByUser= async (req,res) => {

    const userId=req.params.userid;
    const boardId=req.params.boardid;
    try {

        const query= `SELECT lists.name,lists.createdAt,users.firstName as "Creator",boards.name as "boardName" FROM lists
        JOIN boards on boards.id=lists.boardId
        JOIN users on users.id=lists.userId
        WHERE lists.userId=? AND lists.boardId=?`;
        const [lists]=await dbConnection.query(query, [userId,boardId]);
        res.status(200).json(lists)
    }
    catch (error) {
        res.status(400).json(error.message)    
    }
}

const listController= {
    getListById,
    getBoardLists,
    getUserLists,
    getBoardListsByUser
}
export default listController