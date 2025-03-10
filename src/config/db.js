import pkg from 'pg';
const { Pool } = pkg;

// Configuração do banco de dados
const pool = new Pool({
  user: 'postgres',      // Usuário do PostgreSQL
  host: 'mainline.proxy.rlwy.net',        // Host do banco
  database: 'railway',    // Nome do banco de dados
  password: 'MqSEzAuABChyiOwHCOOTtsmSdplfJUcH',    // Senha do usuário
  port: 43461,               // Porta padrão do PostgreSQL
});

// Testar a conexão
pool.connect()
  .then(() => console.log("Banco de dados conectado!"))
  .catch(err => console.error("Erro na conexão com o banco:", err));

export default pool;
