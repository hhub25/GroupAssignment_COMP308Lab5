require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
async function getGeminiSummary(text) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Summarize the following article:\n"""\n${text}\n"""`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
module.exports = { getGeminiSummary };