var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();

router.get('/list/:page', function(req, res, next) {
    var page = req.params.seq;
    var sql = "select seq, user_id, user_nm, user_ctnt from mytable";
    conn.query(sql, function (err, rows) {
        if (err) console.error("err : " + err);
        res.render('list', {title: '게시판 리스트', rows: rows});
    });
});
router.get('/list', function(req, res, next) {
    res.redirect('/board/list/1');
});


//module.exports = router; //공통으로 사용함

