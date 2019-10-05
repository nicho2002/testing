let express = require('express');
let router = express.Router();
 
const awsWorker = require('../controllers/s3.controller.js');
 
router.get('/api/order', awsWorker.doDownload);
 
module.exports = router;