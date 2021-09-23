var dbCon = require('../../config/dbcon');
module.exports = function(app){
    app.get('/noticias', function(req,res){
        var conn = dbCon();
        conn.query("SELECT * FROM table", function(error, result){
            res.render('topics/subject', { table : result });
        });
    });
}