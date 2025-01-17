import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); 

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'meet',
  password: 'Vishwa2612@',
  port: 5432,
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Connected to the database successfully');
    client.release();
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

testConnection();

export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
}

export default pool;
