const express = require("express");

const { TechnosController } = require("../controllers");

const router = express.Router();

router.get("/technos", TechnosController.browse);
router.get("/technos/:id", TechnosController.read);
router.put("/technos", TechnosController.edit);

module.exports = router;
