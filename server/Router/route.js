const express = require("express");
const router = express.Router();
const policeController = require("../Controller/policeController");
const userController = require("../Controller/userController");

router.post("/policeComplaint", policeController.createPolicecomplaint);
router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.get("/complaints", userController.getComplaints);

module.exports = router;
