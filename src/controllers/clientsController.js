const db = require('../../config/db');
const { promisify } = require('util');

const query = promisify(db.query).bind(db);


exports.getClients = (req, res) => {
// Lógica para obter a lista de clientes
res.send('Lista de clientes');
};

exports.createClient = async (req, res) => {
const { name, phone, email } = req.body;

try {
    // Consulta SQL para inserir o cliente
    const sql = 'INSERT INTO clients (name, phone, email) VALUES (?, ?, ?)';
    const values = [name, phone, email];

    // Executa a consulta
    const result = await query(sql, values);

    console.log('Cliente inserido com sucesso, ID:', result.insertId);
    res.send('Cliente criado com sucesso');
} catch (error) {
    console.error('Erro ao inserir cliente:', error);
    res.status(500).send('Erro ao inserir cliente');
}
};

exports.getClientById = (req, res) => {
const clientId = req.params.id;
// Lógica para obter um cliente pelo ID
res.send(`Cliente com ID ${clientId}`);
};

exports.updateClient = (req, res) => {
const clientId = req.params.id;
// Lógica para atualizar um cliente pelo ID
res.send(`Cliente com ID ${clientId} atualizado`);
};

exports.deleteClient = (req, res) => {
const clientId = req.params.id;
// Lógica para excluir um cliente pelo ID
res.send(`Cliente com ID ${clientId} excluído`);
};
  