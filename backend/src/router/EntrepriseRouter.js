const express = require("express");

const { EntrepriseController } = require("../controllers");

const router = express.Router();

router.get("/entreprise", EntrepriseController.browse);
router.put("/entreprise/:id", EntrepriseController.edit);

module.exports = router;
