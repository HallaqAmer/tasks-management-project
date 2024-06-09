import express from "express"
import taskController from "../controllers/taskController.js"



const router=express.Router();

router.get('/:taskid',taskController.getTaskById);



export default router;