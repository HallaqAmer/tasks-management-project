import express from "express"
import userController from "../controllers/userController.js"



const router=express.Router();

router.get('/',userController.getAllUsers);
router.post('/',userController.createNewUser);
router.get('/:id',userController.getUserById);
router.put('/:id',userController.updateUserById);
router.delete('/:id',userController.deleteUserById);


export default router;