const express = require("express");
const userController = require("../controllers/userController");
const validateNote = require("../middleware/validateNote");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/filter", userController.filterUsersByDate);
router.get("/:id", userController.getUserById);
router.post("/", validateNote, userController.createUser);
router.put("/:id", validateNote, userController.updateUser);
router.delete("/:id", userController.deleteUser);


module.exports = router;
