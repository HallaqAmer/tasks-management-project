import express from "express"
import userController from "../controllers/userController.js"



const router=express.Router();

router.get('/',userController.getAllUsers);
router.post('/',userController.createNewUser);
router.get('/:userid',userController.getUserById);
router.put('/:userid',userController.updateUserById);
router.delete('/:userid',userController.deleteUserById);
router.get('/:userid/boards',userController.getUserBoards);
router.get('/:userid/tasks',userController.getUserTasks);



export default router;