const express = require('express');
const router = express.Router();
const policeController = require('../Controller/policeController')

router.post('/policeComplaint',policeController.createPolicecomplaint)


module.exports = router;

