var express = require('express');
var router = express.Router();
var mysql = require('mysql');

 
router.get('/', function(req, res, next) {
   /* 데이터베이스 설정을 입력한다. */
    var connection = mysql.createConnection({
        host    :'localhost',
        port : 3306,
        user : 'root',
        password : 'admin',
        database:'new_schema'
    });
   /* connect 함수로 접속과 동시에 연결 설정에 대한 확인을 한다 */
    connection.connect(function(err) {
        if (err) {
            res.render('mysql', { connect: '연결 실패',err:err });
            console.error(err);
            throw err;
        }else{
            res.render('mysql', { connect: '연결 성공',err:'없음' });
        }
    });
    connection.end();
});
module.exports = router;