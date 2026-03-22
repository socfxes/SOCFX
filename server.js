const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyAXm_UEGoiIEridS4nTSUb-iTm5QU4ebv4';
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'vacio' });
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + GEMINI_API_KEY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] })
    });
    const data = await response.json();
    if (data.error) return res.status(500).json({ error: data.error.message });
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sin respuesta';
    res.json({ reply });
  } catch (err) { res.status(500).json({ error: err.message }); }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('SOCFX en http://localhost:' + PORT));