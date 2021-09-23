module.exports = function(app){
    app.get('/form_include', function(req,res){
        res.render('admin/form_add');
    });
}