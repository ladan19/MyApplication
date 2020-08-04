//var dbConnection = require('../../Config/dbConnection');

module.exports = function(app){


    app.get('/noticias', function(req,res){

        var connection = app.Config.dbConnection();


        connection.query("SELECT * FROM noticias", function(error, result){
            //res.send(result);
            res.render('noticias/noticias', {noticias : result});
            if (error)
                return console.error(error.message);
        });

    });
    
};