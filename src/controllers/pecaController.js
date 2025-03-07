import pool from '../config/db.js';

const getPecas = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, nome, preco FROM pecas"); // Campos explicitamente selecionados
    const pecas = result.rows;

    res.status(200).json(pecas);
  } catch (error) {
    console.error("Erro ao buscar peças:", error.message);

    res.status(500).json({ success: false, error: "Erro no servidor" });
  }
};

const addPeca = async (req, res) => {
  let body = '';

  // Captura os dados enviados no corpo da requisição
  req.on('data', chunk => {
    body += chunk;
  });

  // Após a leitura completa, processa os dados
  req.on('end', async () => {
    try {
      const { nome, preco } = JSON.parse(body); // Assumindo que o corpo da requisição é um JSON
      if (!nome || !preco) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, error: "Nome e preço são obrigatórios." }));
      }

      // Insere a nova peça no banco de dados
      const result = await pool.query(
        'INSERT INTO pecas (nome, preco) VALUES ($1, $2) RETURNING id, nome, preco',
        [nome, preco]
      );

      const novaPeca = result.rows[0];

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(novaPeca)); // Retorna a peça recém-criada
      console.info("Tudo certo!");
    } catch (error) {
      console.error("Erro ao adicionar peça:", error.message);
      

      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: "Erro no servidor ao adicionar peça" }));
    }
  });
};

export { getPecas, addPeca };
