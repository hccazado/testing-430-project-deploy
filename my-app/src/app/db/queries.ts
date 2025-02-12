import { pool } from './connection';

//the place to put actions for accessing the db

export async function fetchProducts() {
    try {
        const data = await pool.query(`
            SELECT *
            FROM products
        `);
        return data.rows
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch product data');
    }
}