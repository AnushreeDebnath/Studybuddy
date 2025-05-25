const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ✅ Default route for testing
app.get('/', (req, res) => {
  res.send('StudyBuddy backend is running ✅');
});

// Load existing data
let history = [];
const dataPath = './data.json';

if (fs.existsSync(dataPath)) {
  history = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
}

// Save new session
app.post('/session', (req, res) => {
  const { duration, completedAt } = req.body;

  const session = {
    duration,
    completedAt: completedAt || new Date().toISOString(),
  };

  history.push(session);
  fs.writeFileSync(dataPath, JSON.stringify(history, null, 2));

  res.status(201).json({ message: 'Session saved', session });
});

// Get all sessions
app.get('/sessions', (req, res) => {
  res.json(history);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

