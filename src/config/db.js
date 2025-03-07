import pkg from 'pg';
const { Pool } = pkg;

// Configuração do banco de dados
const pool = new Pool({
  user: 'postgres',      // Usuário do PostgreSQL
  host: 'localhost',        // Host do banco
  database: 'automec-db',    // Nome do banco de dados
  password: 'hort1974',    // Senha do usuário
  port: 5432,               // Porta padrão do PostgreSQL
});

// Testar a conexão
pool.connect()
  .then(() => console.log("Banco de dados conectado!"))
  .catch(err => console.error("Erro na conexão com o banco:", err));

export default pool;
