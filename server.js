const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { getGeminiSummary } = require("./gemini");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.post("/summarize", async (req, res) => {
  const { article } = req.body;
  if (!article) return res.status(400).send("No article provided");
  try {
    const summary = await getGeminiSummary(article);
    res.json({ summary });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).send("Failed to generate summary");
  }
});
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
