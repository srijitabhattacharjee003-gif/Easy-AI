# Making AI More Accessible for Older Adults

An interactive HCI research case study based on a summer research internship at IIT Kharagpur.
The website presents the research problem, methodology, sidebar redesign, A/B testing, results,
and a fully working interactive demonstration of a "Conventional AI Interface" vs an
"Older-Adult-Friendly AI Interface" — with working Read Aloud (Web Speech API) and
accessibility controls (text size, high contrast, reduced motion).

## Run locally

npm install
npm run dev

Then open the URL Vite prints (usually http://localhost:5173).

Notes:
- No backend is required. All AI responses are simulated locally.
- Read Aloud uses the browser's built-in speech synthesis where available and degrades gracefully otherwise.