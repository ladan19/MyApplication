//var dbConnection = require('../../Config/dbConnection');

module.exports = function(application){

    application.get('/noticias', function(req,res){

        var connection = application.Config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render('noticias/noticias', { noticias : result });
        });

    });
}