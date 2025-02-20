import { pool } from './connection';


// placerholder data for seeding database
//remove when using actuall data
async function seedDatabase() {
  try {
    // Insert Users with different types
    await pool.query(`
      INSERT INTO users (username, email, password, type) VALUES 
      ($1, $2, $3, $4),
      ($5, $6, $7, $8)
    `, [
      'admin', 'admin@fake.com', '123456', 'admin',
      'user', 'user@fake.com', '123456', 'user',
      'creator', 'creator@fake.com', '123456', 'creator'
    ]);
    const owner_id = await pool.query(`SELECT id FROM users WHERE type = 'creator'`);
    // Insert Products
    const productsResult = await pool.query(`
      INSERT INTO products (name, description, price, image, owner_id) VALUES 
      ($1, $2, $3, $4, $5),
      ($6, $7, $8, $9, $10),
      ($11, $12, $13, $14, $15)
      RETURNING id
    `, [
      'Gaming PC', 'High-end gaming computer', 1499.99, '/images/gaming-pc.jpg', owner_id.rows[0].id,
      'Mechanical Keyboard', 'RGB mechanical keyboard', 129.99, '/images/keyboard.jpg', owner_id.rows[0].id,
      'Gaming Mouse', 'Wireless gaming mouse', 79.99, '/images/mouse.jpg' , owner_id.rows[0].id
    ]);

    // Insert Reviews for products
    const [pc, keyboard, mouse] = productsResult.rows;
    await pool.query(`
      INSERT INTO reviews (product_id, description, rating) VALUES 
      ($1, $2, $3),
      ($4, $5, $6),
      ($7, $8, $9)
    `, [
      pc.id, 'Amazing performance!', 5,
      keyboard.id, 'Great typing experience', 4,
      mouse.id, 'Perfect for gaming', 5
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await pool.end();
  }
}

seedDatabase();