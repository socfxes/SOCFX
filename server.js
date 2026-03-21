const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ✅ PON AQUÍ TU API KEY DE OPENROUTER
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || 'sk-or-v1-240...eb4';

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Mensaje vacío' });

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://socfx.com',
        'X-Title': 'SOCFX - ALEX Trading Coach'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.3-70b-instruct:free',
        messages: [{ role: 'user', content: message }],
        max_tokens: 1000,
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const reply = data.choices?.[0]?.message?.content || 'Sin respuesta';
    res.json({ reply });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ SOCFX corriendo en http://localhost:${PORT}`);
});
