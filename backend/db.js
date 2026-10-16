const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Feedback = require('./models/Feedback');

let isMongoConnected = false;

// Local fallback file path if MONGODB_URI is not configured
const localDataDir = path.join(__dirname, 'data');
const localDataFile = path.join(localDataDir, 'feedbacks.json');

// Initialize database
async function initDB() {
  const connectionString = process.env.MONGODB_URI;

  if (
    connectionString &&
    connectionString.trim() &&
    !connectionString.includes('YOUR_MONGODB_CONNECTION_STRING_HERE')
  ) {
    try {
      console.log('Connecting to MongoDB database...');
      await mongoose.connect(connectionString, {
        serverSelectionTimeoutMS: 5000,
      });
      console.log('Connected to MongoDB successfully.');
      isMongoConnected = true;
      return;
    } catch (err) {
      console.error('MongoDB connection error, falling back to local file storage:', err.message);
    }
  }

  // Local fallback storage
  console.log('Using local JSON storage for feedbacks (Set MONGODB_URI in Render/environment for MongoDB Atlas).');
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

  if (isMongoConnected) {
    const doc = await Feedback.create({
      name: sanitizedName,
      comments: sanitizedComments,
      rating: sanitizedRating,
    });
    return {
      id: doc._id.toString(),
      name: doc.name,
      comments: doc.comments,
      rating: doc.rating,
      createdAt: doc.createdAt,
    };
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
    id: Date.now().toString(),
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
  if (isMongoConnected) {
    const docs = await Feedback.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return docs.map((doc) => ({
      id: doc._id.toString(),
      name: doc.name,
      comments: doc.comments,
      rating: doc.rating,
      createdAt: doc.createdAt,
    }));
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
  isMongoDB: () => isMongoConnected,
};
