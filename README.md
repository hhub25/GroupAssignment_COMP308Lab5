Setup Instructions:
--------------------
1. Install dependencies:
   npm install

2. Create a `.env` file in the root folder and add:
   GEMINI_API_KEY=your_actual_api_key_here

3. Start the server:
   node server.js

Process Documentation:
------------------------
Implementation of the Summarizer:
- We built a Node.js backend using Express.
- Google's Gemini API was integrated using the `@google/generative-ai` package.
- A POST endpoint `/summarize` was created, which takes article text from the frontend and sends it to Gemini.
- The frontend (HTML/CSS) was styled using Bootstrap 5 for a clean and modern user interface.
- Users can paste any article into a textarea, and the Gemini model generates a smart summary.

### Selection of Articles:
- We selected recent and relevant articles based on sustainability and emerging technologies:
   1. **Environmental Impact Articles:**
      - [Explained: Generative AI’s environmental impact.](https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117) (2025, January 17)
      - [AI has an environmental problem. Here’s what the world can do about that.](https://www.unep.org/news-and-stories/story/ai-has-environmental-problem-heres-what-world-can-do-about) (2024, September 21)
   2. **Sustainable Solutions Articles:**
      - [Google’s geothermal energy ambitions are growing.](https://www.theverge.com/news/648979/google-geothermal-energy-power-purchase-agreement-asia-taiwan) (2025, April 15)
      - [Xbox says its energy-saving initiatives are worth 1 billion car miles per year.](https://www.polygon.com/news/455500/xbox-energy-saving-green-power) (2024, September 24)
      - [Amazon, Google & Meta: Is nuclear the low-carbon solution?](https://sustainabilitymag.com/articles/why-are-amazon-google-meta-backing-nuclear) (2025, March 13)
- Articles were chosen to match the assignment themes and provide up-to-date real-world examples.

Testing the Solution:
- The application was tested locally on `http://localhost:3000`.
- Articles were pasted into the textarea to verify that the backend correctly communicates with the Gemini API.
- The generated summaries were reviewed for accuracy and quality.
- Edge cases such as empty input fields and very large articles were tested to ensure robustness.
- Manual testing on different browsers (Chrome, Edge) confirmed UI responsiveness and functionality.
