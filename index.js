const express = require('express')
const app = express()
const port = 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Middleware de exemplo
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
  });

  // Importar e usar as rotas de clientes
const clientsRoutes = require('./src/routes/clientsRoutes');
app.use('/api', clientsRoutes);
  
  // Rota de teste
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  // Router de erro 404
  app.use((req, res, next) => {
    res.status(404).send('Ops, essa página não existe');
  });
  
  // Router de erro 500
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado');
  });
  
  app.listen(port, () => {
    console.log(`Esse app está rodando na porta ${port}`);
  });