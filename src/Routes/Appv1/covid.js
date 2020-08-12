var express = require('express');
var router = express.Router();
const controller = require("../../Controllers/covid")
router.post('/insert', controller.addData)
router.delete('/delete/:id', controller.delete)
router.get('/fetch', controller.fetch)
module.exports = router;