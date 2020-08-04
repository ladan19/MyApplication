var app = require('./Config/server')

//Sem o consign vamos apontar as rotas da nossa APP
//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaHome = require('./app/routes/home')(app);
//var rotaInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')(app);



app.listen(3000, function(){
    console.log("Servidor On");
});