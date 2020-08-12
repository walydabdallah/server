var express = require('express');
var router = express.Router();
const Controller = require("../../Controllers/findOS");
router.get('/OS', Controller.OS)
module.exports = router;