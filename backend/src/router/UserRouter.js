const express = require("express");

const { UserController } = require("../controllers");

const router = express.Router();

router.post("/users/login", UserController.login);
router.get("/users", UserController.browse);
router.get("/users/logout", UserController.logout);

router.put("/users/:id", UserController.edit);

module.exports = router;
