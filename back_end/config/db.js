import { Pool } from 'pg';
import dotenv from 'dotenv'
dotenv.config();

const pool = new Pool({
    host: process.env.DB_host,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})

async function verifyConnection() {
  try {
    const client = await pool.connect();
    console.log('✅ Connected to PostgreSQL database');
    client.release();
  } catch (error) {
    console.error('❌ Error connecting to the database:', error);
    process.exit(1);
  }
}

verifyConnection();

export default pool
