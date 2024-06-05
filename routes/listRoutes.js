import express from "express"
import listController from "../controllers/listController.js"



const router=express.Router();

router.get('/:id',listController.getListById);
router.get('/board/:id',listController.getBoardLists);
router.get('/:userid',listController.getUserLists);
router.get('/board/:boardid/user/:userid',listController.getBoardListsByUser);

export default router;