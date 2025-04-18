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

Selection of Articles:
- We selected two recent and relevant articles based on sustainability and emerging technologies:
   1. Environmental Impact Article:
      "xyz" (xyz, date)
   2. Sustainable Solutions Article:
      "xyz" (xyz, date)
- Articles were chosen to match the assignment themes and provide up-to-date real-world examples.

Testing the Solution:
- The application was tested locally on `http://localhost:3000`.
- Articles were pasted into the textarea to verify that the backend correctly communicates with the Gemini API.
- The generated summaries were reviewed for accuracy and quality.
- Edge cases such as empty input fields and very large articles were tested to ensure robustness.
- Manual testing on different browsers (Chrome, Edge) confirmed UI responsiveness and functionality.
