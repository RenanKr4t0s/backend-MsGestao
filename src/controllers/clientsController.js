const db = require('../../config/db');
const { promisify } = require('util');

const query = promisify(db.query).bind(db);


exports.getClients = async (req, res) => {
    try {
        // Lógica para obter a lista de clientes
        const sql = 'SELECT * FROM clients';
        const results = await query(sql);

        res.json(results); // Retorna a lista de clientes
    } catch (error) {
        console.error('Erro ao obter a lista de clientes:', error);
        res.status(500).send('Erro ao obter a lista de clientes');
    }
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

//http://localhost:4000/api/clients/1
exports.getClientById = async (req, res) => {
    const clientId = req.params.id;
    try {
        // Lógica para obter um cliente pelo ID
        const sql = 'SELECT * FROM clients WHERE id = ?';
        const results = await query(sql, [clientId]);

        if (results.length === 0) {
            return res.status(404).send('Cliente não encontrado');
        }

        res.json(results[0]); // Retorna o cliente encontrado
    } catch (error) {
        console.error('Erro ao consultar o cliente:', error);
        res.status(500).send('Erro ao consultar o cliente');
    }
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
  