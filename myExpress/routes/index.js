var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//module.exports는 global 전역으로 해당 라우터를 사용한다
module.exports = router;
