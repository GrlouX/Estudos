var app = require('./config/server');

var routeNotes = require('./app/routes/notes')(app);

var routeHome = require('./app/routes/home')(app);

var routeFormInclude = require('./app/routes/form_include')(app);

app.listen(80, function(){
    console.log("Servidor ON");
});