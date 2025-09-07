{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import express from "express";\
import cors from "cors";\
import bodyParser from "body-parser";\
import fetch from "node-fetch";\
\
const app = express();\
app.use(cors());\
app.use(bodyParser.json());\
\
const PORT = process.env.PORT || 10000;\
\
// \uc0\u9989  Health check\
app.get("/", (req, res) => \{\
  res.json(\{ ok: true, message: "Hello from Universe Ecosystem AI \uc0\u55357 \u56960 " \});\
\});\
\
// \uc0\u9989  Chat endpoint\
app.post("/chat", async (req, res) => \{\
  try \{\
    const userMessage = req.body.message || "Hello";\
\
    // OpenAI API call\
    const response = await fetch("https://api.openai.com/v1/chat/completions", \{\
      method: "POST",\
      headers: \{\
        "Content-Type": "application/json",\
        "Authorization": `Bearer $\{process.env.OPENAI_API_KEY\}`\
      \},\
      body: JSON.stringify(\{\
        model: "gpt-4o-mini",  // \uc0\u9989  latest fast model\
        messages: [\
          \{ role: "system", content: "You are Universe Ecosystem AI assistant." \},\
          \{ role: "user", content: userMessage \}\
        ]\
      \})\
    \});\
\
    const data = await response.json();\
    const reply = data?.choices?.[0]?.message?.content || "No reply";\
\
    res.json(\{ reply \});\
  \} catch (err) \{\
    res.status(500).json(\{ error: err.message \});\
  \}\
\});\
\
app.listen(PORT, () => console.log(`\uc0\u9989  Universe server running on port $\{PORT\}`));\
}