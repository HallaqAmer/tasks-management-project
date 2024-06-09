import express from "express";
import boardController from "../controllers/boardController.js";



const router=express.Router();

router.get('/:boardid',boardController.getBoardById);
router.get('/:boardid/tasks',boardController.getBoardTasks);


export default router;