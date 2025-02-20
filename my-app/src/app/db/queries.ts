import { pool } from './connection';
import { Product } from './types/index';

// Product-related queries
export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
        return result.rows;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export async function getProductsByUserId(userId: string): Promise<Product[]> {
    try {
        const result = await pool.query(
            'SELECT * FROM products WHERE user_id = $1',
            [userId]
        );
        return result.rows;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export const createProduct = async (product: Product): Promise<Product | null> => {
    try {
        const result = await pool.query(
            'INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *',
            [product.name, product.description, product.price]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error creating product:', error);
        return null;
    }
};

export const updateProduct = async (id: number, product: Product): Promise<Product | null> => {
    try {
        const result = await pool.query(
            'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
            [product.name, product.description, product.price, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
};

export const deleteProduct = async (id: number): Promise<boolean> => {
    try {
        await pool.query('DELETE FROM products WHERE id = $1', [id]);
        return true;
    } catch (error) {
        console.error('Error deleting product:', error);
        return false;
    }
};

// User-related queries
export const getUser = async (email: string) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0];
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw new Error("Failed to fetch user.");
    }
};

export async function insertUser(
    name: string,
    email: string,
    password: string,
    type: string,
) {
    try {
        const result = await pool.query(
            'INSERT INTO users (username, email, password, type) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, password, type]
        );
        console.log(`DB: user inserted successfully ${result.rows[0]}`);
    } catch (err) {
        console.error("Database failed to insert new user:", err);
    }
}

export async function insertSocialUser(
    name: string,
    email: string,
    type: string,
) {
    try {
        const result = await pool.query(
            'INSERT INTO users (username, email, type) VALUES ($1, $2, $3) RETURNING *',
            [name, email, type]
        );
        console.log(`DB: user inserted successfully ${result.rows[0]}`);
    } catch (err) {
        console.error("Database failed to insert new user:", err);
    }
}

export const testConnection = async () => {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Database connected! Current time:", result.rows[0].now);
    } catch (err) {
        console.error("Database connection failed:", err);
    }
}

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

//the place to fetch reviews from the db

export async function fetchReviews() {
    try {
        const data = await pool.query(`
            SELECT *
            FROM reviews
        `);
        return data.rows
    } catch (error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch review data');
    }
}