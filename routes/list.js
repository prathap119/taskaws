const express = require('express');
const router = express();
const ListController = require('../controller/ListController');
router.get('/buckets',ListController.listBuckets);
router.get('/buckets/:bucketName/objects', ListController.listObjects);
router.get('/buckets/:bucketName/objects/:objectKey', ListController.getObject);
router.put('/buckets/:bucketName/objects/:objectKey', ListController.putObject);
router.delete('/buckets/:bucketName/objects/:objectKey', ListController.deleteObject);


module.exports = router; 