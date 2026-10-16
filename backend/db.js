const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

let pool = null;
let isPostgres = false;

// Local fallback file path if DATABASE_URL is not configured
const localDataDir = path.join(__dirname, 'data');
const localDataFile = path.join(localDataDir, 'feedbacks.json');

// Initialize database
async function initDB() {
  const connectionString = process.env.DATABASE_URL;

  if (connectionString) {
    try {
      console.log('Connecting to PostgreSQL database...');
      const isLocalhost = connectionString.includes('localhost') || connectionString.includes('127.0.0.1');

      pool = new Pool({
        connectionString,
        ssl: isLocalhost ? false : { rejectUnauthorized: false },
      });

      // Test connection
      const client = await pool.connect();
      console.log('Connected to PostgreSQL successfully.');

      // Create table if not exists (Name, Comments, Rating, CreatedAt - no course)
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS feedbacks (
          id SERIAL PRIMARY KEY,
          name VARCHAR(120) NOT NULL,
          comments TEXT NOT NULL,
          rating INT DEFAULT 5,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `;
      await client.query(createTableQuery);
      client.release();
      console.log('PostgreSQL "feedbacks" table is ready.');
      isPostgres = true;
      return;
    } catch (err) {
      console.error('PostgreSQL connection error, falling back to local file storage:', err.message);
    }
  }

  // Local fallback storage
  console.log('Using local JSON storage for feedbacks (Set DATABASE_URL for PostgreSQL on Render).');
  if (!fs.existsSync(localDataDir)) {
    fs.mkdirSync(localDataDir, { recursive: true });
  }
  if (!fs.existsSync(localDataFile)) {
    fs.writeFileSync(localDataFile, JSON.stringify([], null, 2), 'utf8');
  }
}

// Save a feedback entry
async function saveFeedback({ name, comments, rating = 5 }) {
  const sanitizedName = String(name || '').trim().slice(0, 100) || 'Anonymous Student';
  const sanitizedComments = String(comments || '').trim().slice(0, 2000);
  const sanitizedRating = Math.max(1, Math.min(5, parseInt(rating, 10) || 5));

  if (isPostgres && pool) {
    const query = `
      INSERT INTO feedbacks (name, comments, rating, created_at)
      VALUES ($1, $2, $3, NOW())
      RETURNING id, name, comments, rating, created_at as "createdAt";
    `;
    const res = await pool.query(query, [sanitizedName, sanitizedComments, sanitizedRating]);
    return res.rows[0];
  }

  // Local file fallback
  let list = [];
  try {
    const raw = fs.readFileSync(localDataFile, 'utf8');
    list = JSON.parse(raw);
  } catch (e) {
    list = [];
  }

  const newItem = {
    id: Date.now(),
    name: sanitizedName,
    comments: sanitizedComments,
    rating: sanitizedRating,
    createdAt: new Date().toISOString(),
  };

  list.unshift(newItem);
  fs.writeFileSync(localDataFile, JSON.stringify(list, null, 2), 'utf8');
  return newItem;
}

// Retrieve feedbacks
async function getFeedbacks(limit = 20) {
  if (isPostgres && pool) {
    const query = `
      SELECT id, name, comments, rating, created_at as "createdAt"
      FROM feedbacks
      ORDER BY created_at DESC
      LIMIT $1;
    `;
    const res = await pool.query(query, [limit]);
    return res.rows;
  }

  // Local file fallback
  try {
    const raw = fs.readFileSync(localDataFile, 'utf8');
    const list = JSON.parse(raw);
    return list.slice(0, limit);
  } catch (e) {
    return [];
  }
}

module.exports = {
  initDB,
  saveFeedback,
  getFeedbacks,
  isPostgres: () => isPostgres,
};
