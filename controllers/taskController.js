import dbConnection from "../config/dbConfig.js";

const getTaskById= async (req,res) => {

    const taskId = req.params.taskid;
    try {

        const [task] = await dbConnection.query(`SELECT * FROM tasks WHERE id = ?`, [taskId]);

        res.status(200).json(task);

    }
    catch (error) {
        res.status(400).json(error.message)    
    }

}







const taskController= {
    getTaskById,
    
    
}
export default taskController