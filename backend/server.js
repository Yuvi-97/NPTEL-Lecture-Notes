require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { initDB, saveFeedback, getFeedbacks, isPostgres } = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend
app.use(cors({
  origin: '*', // Adjust for specific domain in production if desired
  methods: ['GET', 'POST'],
}));

app.use(express.json());

// Health Check Endpoint (useful for Render deployment)
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'nptel-notes-api',
    database: isPostgres() ? 'postgresql' : 'local-json-storage',
    timestamp: new Date().toISOString(),
  });
});

// GET /api/feedback - Retrieve recent feedback
app.get('/api/feedback', async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);
    const feedbacks = await getFeedbacks(limit);
    res.json({
      success: true,
      count: feedbacks.length,
      data: feedbacks,
    });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve feedback' });
  }
});

// POST /api/feedback - Submit new feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const { name, comments, rating } = req.body;

    if (!comments || !comments.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please enter your comments or feedback.',
      });
    }

    const saved = await saveFeedback({
      name: name ? name.trim() : 'Anonymous Student',
      comments: comments.trim(),
      rating: rating || 5,
    });

    res.status(201).json({
      success: true,
      message: 'Feedback received successfully! Thank you.',
      data: saved,
    });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ success: false, error: 'Failed to save feedback' });
  }
});

// Start Server
async function startServer() {
  await initDB();
  app.listen(PORT, () => {
    console.log(`NPTEL Notes API running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
    console.log(`Feedback endpoint: http://localhost:${PORT}/api/feedback`);
  });
}

startServer();
