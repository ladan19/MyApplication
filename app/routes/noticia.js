
module.exports = function(app){


    app.get('/noticia', function(req,res){

        var connection = app.Config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;



        noticiasModel.getNoticia(connection, function(error, result){
            //res.send(result);
            res.render('noticias/noticia', { noticia : result });
            //if (error)
                //return console.error(error.message);
        });

    });
    
};