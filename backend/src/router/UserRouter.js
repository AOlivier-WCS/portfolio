const express = require("express");

const { UserController } = require("../controllers");

const router = express.Router();

router.post("/admin/login", UserController.login);
router.get("/users", UserController.browse);
router.get("/logout", UserController.logout);

router.put("/users/:id", UserController.edit);

module.exports = router;
