const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.js')
router.get("/all", userController.getAllUsers);
router.get("/:title", userController.getOneUser);
router.post("/add", userController.addUser);
router.delete("/:removed", userController.deleteUser);
router.put("/:updated", userController.updateUser);
// router.post("/signIn", login);
// router.post("/register", register);
module.exports = router;
