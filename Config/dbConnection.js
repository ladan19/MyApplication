var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão com banco de dados foi estabelecida');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456789',
        database: 'portal_noticias'
    });
}


module.exports = function(){
    console.log('Autoload carregou o módulo de conexão com o banco de dados')
    return connMySQL;
}