import express from "express";
import boardController from "../controllers/boardController.js";



const router=express.Router();

router.get('/:id',boardController.getBoardById);
router.get('/user/:id',boardController.getUserBoards);




export default router;