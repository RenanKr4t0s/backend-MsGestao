const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'ms_gestao_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

module.exports = connection;

