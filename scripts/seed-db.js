// This script initializes the database with seed data
require('dotenv').config({ path: '.env.local' });
const { Pool } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-serverless');
const { sql } = require('drizzle-orm');
const ws = require('ws');
const { neonConfig } = require('@neondatabase/serverless');

// Configure websocket for Neon database
neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set in .env.local file');
}

// Create database connection
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool });

async function seedDatabase() {
  try {
    console.log('Seeding database...');

    // Check if users already exist to avoid duplicates
    const users = await db.execute(sql`SELECT * FROM "user"`);
    
    if (users.rows.length === 0) {
      console.log('Adding seed users...');
      
      // Insert admin user
      await db.execute(
        sql`INSERT INTO "user" (name, email, password, role) 
             VALUES ('Admin User', 'admin@example.com', 'admin123', 'admin')`
      );

      // Insert regular user
      await db.execute(
        sql`INSERT INTO "user" (name, email, password, role) 
             VALUES ('Regular User', 'user@example.com', 'user123', 'user')`
      );

      console.log('Seed data added successfully!');
    } else {
      console.log('Users already exist in the database. Skipping seed.');
    }
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the connection
    await pool.end();
  }
}

// Run the seeding function
seedDatabase();