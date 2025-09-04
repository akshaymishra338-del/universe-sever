import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'

dotenv.config()
const app = express()
app.use(express.json({ limit: '1mb' }))

const allow = (process.env.ALLOW_ORIGIN || '*').split(',').map(s => s.trim())
app.use(cors({ origin: allow.includes('*') ? true : allow }))

function demoRouter(text) {
  const t = (text || '').toLowerCase()
  if (t.includes('attendance') || t.includes('fees') || t.includes('lms')) return '📚 Education: attendance/fees (demo).'
  if (t.includes('doctor') || t.includes('appointment') || t.includes('clinic')) return '🏥 Healthcare: appointment (demo).'
  if (t.includes('driver') || t.includes('van') || t.includes('ride') || t.includes('ola') || t.includes('uber')) return '🚖 Transport: 3 drivers found (demo).'
  if (t.includes('loan') || t.includes('balance') || t.includes('finance')) return '🏦 Finance: balance ₹12,450 (demo).'
  return `🤖 You said: "${text}" — (demo reply).`
}

app.get('/', (req, res) => res.json({ ok: true, message: 'Hello from Universe Ecosystem AI 🚀' }))


app.post('/chat', async (req, res) => {
  const { message } = req.body || {}
  if (!message) return res.status(400).json({ error: 'message required' })

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return res.json({ reply: demoRouter(message) })

  try {
    const body = {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are Univers Ecosystem AI assistant.' },
        { role: 'user', content: message }
      ]
    }
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    })
    const data = await r.json()
    const reply = data?.choices?.[0]?.message?.content || demoRouter(message)
    res.json({ reply })
  } catch (e) {
    console.error(e)
    res.json({ reply: demoRouter(message) })
  }
})

app.post('/edu/attendance', (req, res) => {
  res.json({ date: new Date().toISOString().slice(0,10), present: 26, absent: 4 })
})
app.post('/edu/fees', (req, res) => {
  res.json({ student: 'Demo Student', due: 2450, currency: 'INR', lastPayment: '2025-08-01' })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`univers-server listening on :${port}`))
