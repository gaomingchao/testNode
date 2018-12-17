var express = require('express');
var router = express.Router();
var app = express();
const user = require('./Controller/user')

var multer  = require('multer');
var upload = multer({dest: 'upload_tmp/'});


/* GET home page. */
router.post('/up', upload.any(),user.fn);
router.post('/addbook',user.addbook);


module.exports = router;
