cd ~/Desktop/universe-server
nano index.js
cd ~/Desktop/universe-server
git add index.js
git commit -m "add OpenAI integration route"
git add index.js
git commit -m"add Open ai integration route
git push
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Universe Server OK ✅');
KKKKapp.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
KKKKapp.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
KKKKapp.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
KKKKapp.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
KKKKapp.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
KKKKapp.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
KKKKapp.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
const express = require('express');
const { OpenAI } = require('openai');
const app = express();

app.use(express.json());

// OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// GPT route
app.post('/ask', async (req, res) => {
  try {
    const { message } = req.body || {};
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",   // "gpt-4o" bhi rakh sakte ho
      messages: [{ role: "user", content: message || "Hello" }]
    });
    res.json({ reply: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

// root
app.get('/', (req, res) => {
  res.send('Universe Server OK ✅ with OpenAI 🤖');
});
const express = require('express');
const OpenAI = require('openai');

const app = express();
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Root test route
app.get('/', (req, res) => {
  res.send('Universe Server OK ✅ with OpenAI 🤖');
});

// Ask route (POST)
app.post('/ask', async (req, res) => {
  try {
    const userMessage = req.body.message || "Hello AI";
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: userMessage }]
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

